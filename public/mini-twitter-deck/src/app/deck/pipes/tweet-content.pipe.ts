import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tweetContent'
})
export class TweetContentPipe implements PipeTransform {

  transform(text: string, entities: any): any {
    const joinedEntities = this.joinEntities(entities);
    text = this.addEntityLinks(text, joinedEntities);
    return text;
  }

  addEntityLinks(text: string, newEntities: any): string {
    let offset = 0;
    let textReplacement = '';
    newEntities.forEach((newEntity: NewEntity) => {
      switch (newEntity.type) {
        case EntityTypes.UserMention:
          textReplacement =
            `<a href="https://twitter.com/${newEntity.text}"` +
            `target="_blank">${newEntity.linkText}</a/>`;
          break;
        case EntityTypes.Hashtag:
          textReplacement =
            `<a href="https://twitter.com/hashtag/${newEntity.text}"` +
            `target="_blank">${newEntity.linkText}</a/>`;
          break;
        case EntityTypes.Url:
          textReplacement =
            `<a href="${newEntity.linkText}"` +
            `target="_blank">${newEntity.linkText}</a/>`;
          break;
        default:
          break;
      }

      text = text.slice(0, offset + newEntity.start) +
        textReplacement +
        text.slice(offset + newEntity.end);
      offset += textReplacement.length - newEntity.linkText.length;
    });

    return text;
  }

  /**
   * Combine hashtags, user_mentions, and screen_names
   * in a single array to accomodate a more straightforward
   * way of offsetting the starting indices upon
   * replacement. We're just flattening out the entities
   * object into an array of objects and sort them via their
   * starting indices.
   *
   * @param entities Entities of the Tweet Object
   */
  joinEntities(entities) {
    const joinedEntitiesArray: Array<NewEntity> = [];
    entities.user_mentions.forEach(
      (userMention: UserMentionEntity) => {
        joinedEntitiesArray.push({
          type: EntityTypes.UserMention,
          text: userMention.screen_name,
          linkText: `@${userMention.screen_name}`,
          start: userMention.indices[0],
          end: userMention.indices[1],
        });
      });

    entities.hashtags.forEach((hashtag: HashtagEntity) => {
      joinedEntitiesArray.push({
        type: EntityTypes.Hashtag,
        text: hashtag.text,
        linkText: `#${hashtag.text}`,
        start: hashtag.indices[0],
        end: hashtag.indices[1],
      });
    });

    entities.urls.forEach((url: UrlEntity) => {
      joinedEntitiesArray.push({
        type: EntityTypes.Url,
        linkText: `${url.url}`,
        start: url.indices[0],
        end: url.indices[1],
      });
    });

    return joinedEntitiesArray.sort((a, b) => a.start - b.start);
  }
}

enum EntityTypes {
  UserMention,
  Hashtag,
  Url,
}

interface UserMentionEntity {
  screen_name: string;
  name: string;
  id: number;
  id_str: string;
  indices: Array<number>;
}

interface HashtagEntity {
  text: string;
  indices: Array<number>;
}

interface UrlEntity {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: Array<number>;
}

interface NewEntity {
  type: number;
  text?: string;
  linkText: string;
  start: number;
  end: number;
}
