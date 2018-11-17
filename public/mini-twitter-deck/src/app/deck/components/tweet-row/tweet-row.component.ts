import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mtd-tweet-row',
  templateUrl: './tweet-row.component.html',
  styleUrls: ['./tweet-row.component.scss']
})
export class TweetRowComponent implements OnInit {
  // tweet = TWEET_SAMP;
  tweet = RETWEET_SAMP;

  constructor() { }

  ngOnInit() {
  }
}

const TWEET_SAMP = {
    'created_at': new Date('Tue Nov 13 21:30:02 +0000 2018'),
    'id': 1062457586954461200,
    'id_str': '1062457586954461184',
    'text': 'Excited to share the news that Make School co-founders, ' +
      '@DesaiAshu and @JeremyRossmann, have been named in this yea… https://t.co/0w0wFJ0Fok',
    'truncated': true,
    'entities': {
      'hashtags': [],
      'symbols': [],
      'user_mentions': [
        {
          'screen_name': 'DesaiAshu',
          'name': 'Ashu Desai',
          'id': 312168293,
          'id_str': '312168293',
          'indices': [
            56,
            66
          ]
        },
        {
          'screen_name': 'JeremyRossmann',
          'name': 'Jeremy Rossmann',
          'id': 2561905418,
          'id_str': '2561905418',
          'indices': [
            71,
            86
          ]
        }
      ],
      'urls': [
        {
          'url': 'https://t.co/0w0wFJ0Fok',
          'expanded_url': 'https://twitter.com/i/web/status/1062457586954461184',
          'display_url': 'twitter.com/i/web/status/1…',
          'indices': [
            117,
            140
          ]
        }
      ]
    },
    'source': '<a href=\'http://www.hubspot.com/\' rel=\'nofollow\'>HubSpot</a>',
    'in_reply_to_status_id': null,
    'in_reply_to_status_id_str': null,
    'in_reply_to_user_id': null,
    'in_reply_to_user_id_str': null,
    'in_reply_to_screen_name': null,
    'user': {
      'id': 506458865,
      'id_str': '506458865',
      'name': 'Make School',
      'screen_name': 'MakeSchool',
      'location': 'San Francisco, CA',
      'description': 'Make School offers a Bachelor’s in ' +
        'Applied Computer Science to prepare students of all ' +
        'backgrounds for jobs at companies like Facebook, Google, Apple.',
      'url': 'https://t.co/rfNT6gA2fX',
      'entities': {
        'url': {
          'urls': [
            {
              'url': 'https://t.co/rfNT6gA2fX',
              'expanded_url': 'http://make.sc/join-us',
              'display_url': 'make.sc/join-us',
              'indices': [
                0,
                23
              ]
            }
          ]
        },
        'description': {
          'urls': []
        }
      },
      'protected': false,
      'followers_count': 4917,
      'friends_count': 4582,
      'listed_count': 184,
      'created_at': 'Mon Feb 27 21:54:26 +0000 2012',
      'favourites_count': 2937,
      'utc_offset': null,
      'time_zone': null,
      'geo_enabled': true,
      'verified': false,
      'statuses_count': 2597,
      'lang': 'en',
      'contributors_enabled': false,
      'is_translator': false,
      'is_translation_enabled': false,
      'profile_background_color': 'FFFFFF',
      'profile_background_image_url': 'http://abs.twimg.com/images/themes/theme1/bg.png',
      'profile_background_image_url_https': 'https://abs.twimg.com/images/themes/theme1/bg.png',
      'profile_background_tile': false,
      'profile_image_url': 'http://pbs.twimg.com/profile_images/1047598126876356608/I7Lhsfme_normal.jpg',
      'profile_image_url_https': 'https://pbs.twimg.com/profile_images/1047598126876356608/I7Lhsfme_normal.jpg',
      'profile_banner_url': 'https://pbs.twimg.com/profile_banners/506458865/1538432506',
      'profile_link_color': '0084B4',
      'profile_sidebar_border_color': 'FFFFFF',
      'profile_sidebar_fill_color': 'DDEEF6',
      'profile_text_color': '333333',
      'profile_use_background_image': false,
      'has_extended_profile': false,
      'default_profile': false,
      'default_profile_image': false,
      'following': false,
      'follow_request_sent': false,
      'notifications': false,
      'translator_type': 'none'
    },
    'geo': null,
    'coordinates': null,
    'place': null,
    'contributors': null,
    'is_quote_status': false,
    'retweet_count': 10,
    'favorite_count': 19,
    'favorited': false,
    'retweeted': false,
    'possibly_sensitive': false,
    'lang': 'en'
  };

const RETWEET_SAMP = {
  'created_at': 'Fri Nov 02 17:59:56 +0000 2018',
  'id': 1058418447464288300,
  'id_str': '1058418447464288256',
  'text': `RT @alexisohanian: Yes! That's @MakeSchool in the @Initialized portfolio https://t.co/S4snvVswi1'`,
  'truncated': false,
  'entities': {
    'hashtags': [],
    'symbols': [],
    'user_mentions': [
      {
        'screen_name': 'alexisohanian',
        'name': 'Alexis Ohanian Sr. 🚀',
        'id': 811350,
        'id_str': '811350',
        'indices': [
          3,
          17
        ]
      },
      {
        'screen_name': 'MakeSchool',
        'name': 'Make School',
        'id': 506458865,
        'id_str': '506458865',
        'indices': [
          31,
          42
        ]
      },
      {
        'screen_name': 'Initialized',
        'name': 'Initialized Capital',
        'id': 738803172991373300,
        'id_str': '738803172991373312',
        'indices': [
          50,
          62
        ]
      }
    ],
    'urls': [
      {
        'url': 'https://t.co/S4snvVswi1',
        'expanded_url': 'https://twitter.com/LeadByValues/status/1058404289075470343',
        'display_url': 'twitter.com/LeadByValues/s…',
        'indices': [
          73,
          96
        ]
      }
    ]
  },
  'source': '<a href=\'http://twitter.com/download/iphone\' rel=\'nofollow\'>Twitter for iPhone</a>',
  'in_reply_to_status_id': null,
  'in_reply_to_status_id_str': null,
  'in_reply_to_user_id': null,
  'in_reply_to_user_id_str': null,
  'in_reply_to_screen_name': null,
  'user': {
    'id': 506458865,
    'id_str': '506458865',
    'name': 'Make School',
    'screen_name': 'MakeSchool',
    'location': 'San Francisco, CA',
    'description': 'Make School offers a Bachelor’s in Applied ' +
      'Computer Science to prepare students of all backgrounds for jobs at companies like Facebook, Google, Apple.',
    'url': 'https://t.co/rfNT6gA2fX',
    'entities': {
      'url': {
        'urls': [
          {
            'url': 'https://t.co/rfNT6gA2fX',
            'expanded_url': 'http://make.sc/join-us',
            'display_url': 'make.sc/join-us',
            'indices': [
              0,
              23
            ]
          }
        ]
      },
      'description': {
        'urls': []
      }
    },
    'protected': false,
    'followers_count': 4917,
    'friends_count': 4582,
    'listed_count': 184,
    'created_at': 'Mon Feb 27 21:54:26 +0000 2012',
    'favourites_count': 2937,
    'utc_offset': null,
    'time_zone': null,
    'geo_enabled': true,
    'verified': false,
    'statuses_count': 2597,
    'lang': 'en',
    'contributors_enabled': false,
    'is_translator': false,
    'is_translation_enabled': false,
    'profile_background_color': 'FFFFFF',
    'profile_background_image_url': 'http://abs.twimg.com/images/themes/theme1/bg.png',
    'profile_background_image_url_https': 'https://abs.twimg.com/images/themes/theme1/bg.png',
    'profile_background_tile': false,
    'profile_image_url': 'http://pbs.twimg.com/profile_images/1047598126876356608/I7Lhsfme_normal.jpg',
    'profile_image_url_https': 'https://pbs.twimg.com/profile_images/1047598126876356608/I7Lhsfme_normal.jpg',
    'profile_banner_url': 'https://pbs.twimg.com/profile_banners/506458865/1538432506',
    'profile_link_color': '0084B4',
    'profile_sidebar_border_color': 'FFFFFF',
    'profile_sidebar_fill_color': 'DDEEF6',
    'profile_text_color': '333333',
    'profile_use_background_image': false,
    'has_extended_profile': false,
    'default_profile': false,
    'default_profile_image': false,
    'following': false,
    'follow_request_sent': false,
    'notifications': false,
    'translator_type': 'none'
  },
  'geo': null,
  'coordinates': null,
  'place': null,
  'contributors': null,
  'retweeted_status': {
    'created_at': 'Fri Nov 02 17:33:13 +0000 2018',
    'id': 1058411723881775100,
    'id_str': '1058411723881775104',
    'text': 'Yes! That\'s @MakeSchool in the @Initialized ' +
      'portfolio https://t.co/S4snvVswi1',
    'truncated': false,
    'entities': {
      'hashtags': [],
      'symbols': [],
      'user_mentions': [
        {
          'screen_name': 'MakeSchool',
          'name': 'Make School',
          'id': 506458865,
          'id_str': '506458865',
          'indices': [
            12,
            23
          ]
        },
        {
          'screen_name': 'Initialized',
          'name': 'Initialized Capital',
          'id': 738803172991373300,
          'id_str': '738803172991373312',
          'indices': [
            31,
            43
          ]
        }
      ],
      'urls': [
        {
          'url': 'https://t.co/S4snvVswi1',
          'expanded_url': 'https://twitter.com/LeadByValues/status/1058404289075470343',
          'display_url': 'twitter.com/LeadByValues/s…',
          'indices': [
            54,
            77
          ]
        }
      ]
    },
    'source': '<a href=\'http://twitter.com/download/iphone\' rel=\'nofollow\'>Twitter for iPhone</a>',
    'in_reply_to_status_id': null,
    'in_reply_to_status_id_str': null,
    'in_reply_to_user_id': null,
    'in_reply_to_user_id_str': null,
    'in_reply_to_screen_name': null,
    'user': {
      'id': 811350,
      'id_str': '811350',
      'name': 'Alexis Ohanian Sr. 🚀',
      'screen_name': 'alexisohanian',
      'location': 'Worldwide',
      'description': '🚀 Co-founder & managing partner @Initialized ' +
        '(early stage VC, $22B in market value so far) 📖 Bestselling author ⬆️ Co-founder @Reddit',
      'url': 'https://t.co/HWnUv3ZBtv',
      'entities': {
        'url': {
          'urls': [
            {
              'url': 'https://t.co/HWnUv3ZBtv',
              'expanded_url': 'http://alexisohanian.com',
              'display_url': 'alexisohanian.com',
              'indices': [
                0,
                23
              ]
            }
          ]
        },
        'description': {
          'urls': []
        }
      },
      'protected': false,
      'followers_count': 243513,
      'friends_count': 4410,
      'listed_count': 4501,
      'created_at': 'Mon Mar 05 03:26:51 +0000 2007',
      'favourites_count': 27100,
      'utc_offset': null,
      'time_zone': null,
      'geo_enabled': true,
      'verified': true,
      'statuses_count': 62221,
      'lang': 'en',
      'contributors_enabled': false,
      'is_translator': false,
      'is_translation_enabled': false,
      'profile_background_color': '111111',
      'profile_background_image_url': 'http://abs.twimg.com/images/themes/theme1/bg.png',
      'profile_background_image_url_https': 'https://abs.twimg.com/images/themes/theme1/bg.png',
      'profile_background_tile': true,
      'profile_image_url': 'http://pbs.twimg.com/profile_images/975128915533426688/JEGHXFiz_normal.jpg',
      'profile_image_url_https': 'https://pbs.twimg.com/profile_images/975128915533426688/JEGHXFiz_normal.jpg',
      'profile_banner_url': 'https://pbs.twimg.com/profile_banners/811350/1528325831',
      'profile_link_color': 'EE1235',
      'profile_sidebar_border_color': 'FFFFFF',
      'profile_sidebar_fill_color': 'DDEEF6',
      'profile_text_color': '333333',
      'profile_use_background_image': true,
      'has_extended_profile': true,
      'default_profile': false,
      'default_profile_image': false,
      'following': false,
      'follow_request_sent': false,
      'notifications': false,
      'translator_type': 'none'
    },
    'geo': null,
    'coordinates': null,
    'place': null,
    'contributors': null,
    'is_quote_status': true,
    'quoted_status_id': 1058404289075470300,
    'quoted_status_id_str': '1058404289075470343',
    'quoted_status': {
      'created_at': 'Fri Nov 02 17:03:41 +0000 2018',
      'id': 1058404289075470300,
      'id_str': '1058404289075470343',
      'text': 'I\'m glad to see a reference to #AccesibleEducation ' +
        'in your talk today @alexisohanian \nI wonder if there any… https://t.co/RJ8s1qdXm8',
      'truncated': true,
      'entities': {
        'hashtags': [
          {
            'text': 'AccesibleEducation',
            'indices': [
              31,
              50
            ]
          }
        ],
        'symbols': [],
        'user_mentions': [
          {
            'screen_name': 'alexisohanian',
            'name': 'Alexis Ohanian Sr. 🚀',
            'id': 811350,
            'id_str': '811350',
            'indices': [
              70,
              84
            ]
          }
        ],
        'urls': [
          {
            'url': 'https://t.co/RJ8s1qdXm8',
            'expanded_url': 'https://twitter.com/i/web/status/1058404289075470343',
            'display_url': 'twitter.com/i/web/status/1…',
            'indices': [
              109,
              132
            ]
          }
        ]
      },
      'source': '<a href=\'http://twitter.com/download/android\' rel=\'nofollow\'>Twitter for Android</a>',
      'in_reply_to_status_id': null,
      'in_reply_to_status_id_str': null,
      'in_reply_to_user_id': null,
      'in_reply_to_user_id_str': null,
      'in_reply_to_screen_name': null,
      'user': {
        'id': 1620548466,
        'id_str': '1620548466',
        'name': 'Sandeep Sidhu (Grewal)',
        'screen_name': 'LeadByValues',
        'location': 'Vancouver, Canada',
        'description': 'I will leave this world a little better than' +
          'I found it | Natural #Optimist & #Tenacious | Fostering positive relationships @SFU | #Register2Give campaigner',
        'url': 'https://t.co/kcdEl7sCPe',
        'entities': {
          'url': {
            'urls': [
              {
                'url': 'https://t.co/kcdEl7sCPe',
                'expanded_url': 'http://ca.linkedin.com/in/LeadByValues/',
                'display_url': 'ca.linkedin.com/in/LeadByValue…',
                'indices': [
                  0,
                  23
                ]
              }
            ]
          },
          'description': {
            'urls': []
          }
        },
        'protected': false,
        'followers_count': 771,
        'friends_count': 1422,
        'listed_count': 64,
        'created_at': 'Thu Jul 25 15:01:12 +0000 2013',
        'favourites_count': 1775,
        'utc_offset': null,
        'time_zone': null,
        'geo_enabled': true,
        'verified': false,
        'statuses_count': 4443,
        'lang': 'en',
        'contributors_enabled': false,
        'is_translator': false,
        'is_translation_enabled': false,
        'profile_background_color': '000000',
        'profile_background_image_url': 'http://abs.twimg.com/images/themes/theme1/bg.png',
        'profile_background_image_url_https': 'https://abs.twimg.com/images/themes/theme1/bg.png',
        'profile_background_tile': false,
        'profile_image_url': 'http://pbs.twimg.com/profile_images/1029786443994939392/PCguTOjs_normal.jpg',
        'profile_image_url_https': 'https://pbs.twimg.com/profile_images/1029786443994939392/PCguTOjs_normal.jpg',
        'profile_banner_url': 'https://pbs.twimg.com/profile_banners/1620548466/1421634663',
        'profile_link_color': '3B94D9',
        'profile_sidebar_border_color': '000000',
        'profile_sidebar_fill_color': '000000',
        'profile_text_color': '000000',
        'profile_use_background_image': false,
        'has_extended_profile': false,
        'default_profile': false,
        'default_profile_image': false,
        'following': false,
        'follow_request_sent': false,
        'notifications': false,
        'translator_type': 'none'
      },
      'geo': null,
      'coordinates': null,
      'place': null,
      'contributors': null,
      'is_quote_status': false,
      'retweet_count': 1,
      'favorite_count': 8,
      'favorited': false,
      'retweeted': false,
      'possibly_sensitive': false,
      'lang': 'en'
    },
    'retweet_count': 4,
    'favorite_count': 24,
    'favorited': false,
    'retweeted': false,
    'possibly_sensitive': false,
    'lang': 'en'
  },
  'is_quote_status': true,
  'quoted_status_id': 1058404289075470300,
  'quoted_status_id_str': '1058404289075470343',
  'retweet_count': 4,
  'favorite_count': 0,
  'favorited': false,
  'retweeted': false,
  'possibly_sensitive': false,
  'lang': 'en'
};
