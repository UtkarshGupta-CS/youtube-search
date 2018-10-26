import { observable, action, decorate } from "mobx";
import axios from "axios";

export const SearchStore = decorate(
  class SearchStore {
    searchResults = [
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/EbL5CB80HdLJzCQGbqAP7T0poWI\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "fB8TyLTD7EE"
        },
        "snippet": {
          "publishedAt": "2018-09-26T13:00:06.000Z",
          "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
          "title": "RISE (ft. The Glitch Mob, Mako, and The Word Alive) | Worlds 2018 - League of Legends",
          "description": "Reaching the peak takes more than skill. Only those with the ambition to RISE above all others will know its height. For more information on the 2018 League of ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/fB8TyLTD7EE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/fB8TyLTD7EE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/fB8TyLTD7EE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "League of Legends",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/pqPk68pyu4UN0ALIfeVVFhIvYQo\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "m7Bc3pLyij0"
        },
        "snippet": {
          "publishedAt": "2018-09-24T13:58:16.000Z",
          "channelId": "UCEdvpU2pFRCVqU6yIPyTpMQ",
          "title": "Marshmello ft. Bastille - Happier (Official Music Video)",
          "description": "Marshmello ft. Bastille - Happier (Official Music Video) Download / Stream Happier ▷ http://marshmello.lnk.to/happier NEW Mello™   by Marshmello gear SHOP ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/m7Bc3pLyij0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/m7Bc3pLyij0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/m7Bc3pLyij0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Marshmello",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/cx96QgLLWZH_JxHSfGIB_8-HdN0\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "aJOTlE1K90k"
        },
        "snippet": {
          "publishedAt": "2018-05-31T04:00:00.000Z",
          "channelId": "UCN1hnUccO4FD5WfM7ithXaw",
          "title": "Maroon 5 - Girls Like You ft. Cardi B",
          "description": "\"Girls Like You” is out now. http://smarturl.it/GLY For more, visit: https://www.facebook.com/maroon5 https://twitter.com/maroon5 ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/aJOTlE1K90k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/aJOTlE1K90k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/aJOTlE1K90k/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Maroon5VEVO",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/l0aRivofHsPmQD7Lgdh8Jf7Gsf4\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "FxQTY-W6GIo"
        },
        "snippet": {
          "publishedAt": "2018-09-14T18:55:13.000Z",
          "channelId": "UCfM3zsQsOnfWNUppiycmBuw",
          "title": "KILLSHOT [Official Audio]",
          "description": "Kamikaze is out now: http://shady.sr/Kamikaze http://eminem.com http://facebook.com/eminem http://twitter.com/eminem http://instagram.com/eminem ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/FxQTY-W6GIo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/FxQTY-W6GIo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/FxQTY-W6GIo/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "EminemMusic",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/1szGxIC2JpHOZayLDDyWY1wRMRg\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "VRJmcxCrAOA"
        },
        "snippet": {
          "publishedAt": "2018-01-22T22:55:24.000Z",
          "channelId": "UCRijo3ddMTht_IHyNSNXpNQ",
          "title": "Real Life Trick Shots 2 | Dude Perfect",
          "description": "Trick shots should be an everyday thing! Thanks to Kay Jewelers for sponsoring this video! Win Valentine's Day by going to http://dudeperfect.com/KayJewelers ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/VRJmcxCrAOA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/VRJmcxCrAOA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/VRJmcxCrAOA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Dude Perfect",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/775Fh2oqi9lZWIJ7eHWUBazbZwM\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "iDCFgMYnkcs"
        },
        "snippet": {
          "publishedAt": "2018-10-18T08:53:33.000Z",
          "channelId": "UCmh5gdwCx6lN7gEC20leNVA",
          "title": "SURPRISING JOSH PECK WITH MIRANDA COSGROVE!!",
          "description": "This was the best day of my year. Fun Drake and Josh reunion Go follow Miranda on insta and comment saying thank you for making davids year!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/iDCFgMYnkcs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/iDCFgMYnkcs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/iDCFgMYnkcs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "David Dobrik",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/id3uz64VI_Frb6lxlzAYDG8yCuw\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "A2FsgKoGD04"
        },
        "snippet": {
          "publishedAt": "2017-05-25T21:58:58.000Z",
          "channelId": "UCRijo3ddMTht_IHyNSNXpNQ",
          "title": "Real Life Trick Shots | Dude Perfect",
          "description": "Trick shots should be an everyday thing! Thanks to Kingsford for sponsoring this video! ▻ Click HERE to subscribe to Dude Perfect! http://bit.ly/SubDudePerfect ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/A2FsgKoGD04/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/A2FsgKoGD04/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/A2FsgKoGD04/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Dude Perfect",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/BLV4_XL4EPtgzJwGMm8ZLtSUokU\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "FaOSCASqLsE"
        },
        "snippet": {
          "publishedAt": "2016-01-17T08:49:19.000Z",
          "channelId": "UCqFzWxSCi39LnW1JKFR3efg",
          "title": "Star Wars Undercover Boss: Starkiller Base - SNL",
          "description": "Kylo Ren (Adam Driver) goes undercover as Matt, a radar technician, at Starkiller Base. [Season 41, 2016] #SNL Subscribe to SNL: https://goo.gl/tUsXwM Get ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/FaOSCASqLsE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/FaOSCASqLsE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/FaOSCASqLsE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Saturday Night Live",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/Em-6euVf5saohkrtNZzXR2jmaTo\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "Vap9SMRf8YE"
        },
        "snippet": {
          "publishedAt": "2015-12-03T14:00:01.000Z",
          "channelId": "UCp0hYYBW6IMayGgR-WeoCvQ",
          "title": "5 Second Rule with Sofia Vergara -- Extended!",
          "description": "Ellen and Sofia played a hilarious game of 5 Second Rule! Check it out, plus all the fun we didn't have time for in the show!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Vap9SMRf8YE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Vap9SMRf8YE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Vap9SMRf8YE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "TheEllenShow",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/f2iZBo4zi_VGAAc7vVW7R_HjqJY\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "tk36ovCMsU8"
        },
        "snippet": {
          "publishedAt": "2017-08-11T12:56:44.000Z",
          "channelId": "UCEdvpU2pFRCVqU6yIPyTpMQ",
          "title": "Marshmello ft. Khalid - Silence (Official Lyric Video)",
          "description": "NEW Mello™   by Marshmello gear SHOP NOW ▷ http://mellogang.com Watch the Lyric Video for HAPPIER ▷ https://youtu.be/RE87rQkXdNw SUBSCRIBE ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/tk36ovCMsU8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/tk36ovCMsU8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/tk36ovCMsU8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Marshmello",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/r2nDE73sd5Iy3E1d0mr0HbGBQRs\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "VNM7Z7hir_I"
        },
        "snippet": {
          "publishedAt": "2013-12-12T00:49:00.000Z",
          "channelId": "UCi7GJNg51C3jgmYTUwqoUXA",
          "title": "Ice Cube, Kevin Hart, And Conan Share A Lyft Car",
          "description": "CONAN Highlight: The stars of \"Ride Along\" teach Conan how to roll around Hollywood. Get \"Ride Along\" on Blu-ray™ @ http://ridealong.com Team Coco is the ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/VNM7Z7hir_I/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/VNM7Z7hir_I/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/VNM7Z7hir_I/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Team Coco",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/kgwvHkfyrLwgDQSoGh8jH_qbax0\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "1Za8BtLgKv8"
        },
        "snippet": {
          "publishedAt": "2016-01-06T04:49:00.000Z",
          "channelId": "UCi7GJNg51C3jgmYTUwqoUXA",
          "title": "Ice Cube, Kevin Hart And Conan Help A Student Driver  - CONAN on TBS",
          "description": "CONAN Highlight: A CONAN staffer is learning the rules of the road, with a little help from Kevin Hart, Ice Cube, & Conan. Look out, fellow drivers! More CONAN ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/1Za8BtLgKv8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/1Za8BtLgKv8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/1Za8BtLgKv8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Team Coco",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/PG4UYToepCi8I-Ykhyt2O-ZgwGU\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "QxhlECJytWo"
        },
        "snippet": {
          "publishedAt": "2017-04-15T15:00:36.000Z",
          "channelId": "UCpko_-a4wgz2u_DgDgd9fqA",
          "title": "The Try Guys Take A Lie Detector Test",
          "description": "The Try Guys test their friendship as they probe deep into each others' personal lives. Check out more awesome videos at BuzzFeedVideo!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/QxhlECJytWo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/QxhlECJytWo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/QxhlECJytWo/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "BuzzFeedVideo",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/qfHETId_LiuBqsAN2_uQP1JF7LY\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "ozVRGho-cZQ"
        },
        "snippet": {
          "publishedAt": "2016-10-14T03:55:39.000Z",
          "channelId": "UC8-Th83bH_thdKZDJCrn88g",
          "title": "Jimmy and Kevin Hart Visit a Haunted House",
          "description": "Jimmy and Kevin Hart visit \"Blood Manor,\" New York City's scariest haunted house. Subscribe NOW to The Tonight Show Starring Jimmy Fallon: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ozVRGho-cZQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ozVRGho-cZQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ozVRGho-cZQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "The Tonight Show Starring Jimmy Fallon",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/FsuyYUPtklNkdmyGKkn-jVwuw50\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "r6zIGXun57U"
        },
        "snippet": {
          "publishedAt": "2017-10-18T13:00:08.000Z",
          "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
          "title": "Legends Never Die (ft. Against The Current) | Worlds 2017 - League of Legends",
          "description": "The pursuit of mastery is an endless journey, but those who persevere etch their names in history. For more information on the 2017 League of Legends World ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/r6zIGXun57U/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/r6zIGXun57U/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/r6zIGXun57U/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "League of Legends",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/fqUWAzVL1_XnRhwV7WQUb9SpihY\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "dN44xpHjNxE"
        },
        "snippet": {
          "publishedAt": "2018-09-07T04:00:03.000Z",
          "channelId": "UCs8ynQgjoKZblUXosXoeOEQ",
          "title": "Lukas Graham - Love Someone [OFFICIAL MUSIC VIDEO]",
          "description": "Love Someone by Lukas Graham, Official Music Video Listen to \"Love Someone\" here: https://LukasGraham.lnk.to/LoveSomeone '3 (The Purple Album)' is out ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/dN44xpHjNxE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/dN44xpHjNxE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/dN44xpHjNxE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Lukas Graham",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/8Jh2TRViEZ8ecVKAGQ0Xzs_KcfM\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "Dceyy0cX6J4"
        },
        "snippet": {
          "publishedAt": "2016-09-27T15:12:00.000Z",
          "channelId": "UCAuUUnT6oDeKwE6v1NGQxug",
          "title": "The agony of trying to unsubscribe | James Veitch",
          "description": "It happens to all of us: you unsubscribe from an unwanted marketing email, and a few days later another message from the same company pops up in your inbox ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Dceyy0cX6J4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Dceyy0cX6J4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Dceyy0cX6J4/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "TED",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/dp3S4rubtBXd__HkluPEYGfT-40\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "1arz9Q9qBas"
        },
        "snippet": {
          "publishedAt": "2018-08-31T05:33:28.000Z",
          "channelId": "UCfM3zsQsOnfWNUppiycmBuw",
          "title": "Lucky You (Feat. Joyner Lucas) [Official Audio]",
          "description": "From the album Kamikaze, out now: http://shady.sr/Kamikaze http://eminem.com http://facebook.com/eminem http://twitter.com/eminem ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/1arz9Q9qBas/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/1arz9Q9qBas/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/1arz9Q9qBas/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "EminemMusic",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/A40J1DWftqZC0JQNA0StOjqRVvc\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "imW392e6XR0"
        },
        "snippet": {
          "publishedAt": "2014-05-22T07:37:17.000Z",
          "channelId": "UCa6vGFO9ty8v5KZJXQxdhaw",
          "title": "Celebrities Read Mean Tweets #7",
          "description": "There are a lot of celebrities on twitter and some people feel very comfortable using twitter to insult those celebrities. From time to time, we gather those insults ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/imW392e6XR0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/imW392e6XR0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/imW392e6XR0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Jimmy Kimmel Live",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/UabhO7C2ATIo0oyyNIakoFIoDcE\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "sh9giaTKbv4"
        },
        "snippet": {
          "publishedAt": "2016-09-16T06:26:25.000Z",
          "channelId": "UCJ0uqCI0Vqr2Rrt1HseGirg",
          "title": "Spill Your Guts or Fill Your Guts w/ Jimmy Kimmel",
          "description": "James and Jimmy Kimmel take turns choosing between answering very personal questions or eating items like ghost pepper hot sauce. \"Subscribe To \"\"The ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/sh9giaTKbv4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/sh9giaTKbv4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/sh9giaTKbv4/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "The Late Late Show with James Corden",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/FeJB4wz9IW0KlMXtJ1MFSRBhZ-w\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "04mfKJWDSzI"
        },
        "snippet": {
          "publishedAt": "2010-06-14T08:36:39.000Z",
          "channelId": "UCfIXdjDQH9Fau7y99_Orpjw",
          "title": "Gorillaz - On Melancholy Hill (Official Video)",
          "description": "Follow Gorillaz online: http://gorillaz.com http://facebook.com/Gorillaz http://twitter.com/GorillazBand https://instagram.com/gorillaz Music video by Gorillaz ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/04mfKJWDSzI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/04mfKJWDSzI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/04mfKJWDSzI/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Gorillaz",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/LM3DgcAY6uDiziOTcJojyDSJ6Fs\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "K3Qzzggn--s"
        },
        "snippet": {
          "publishedAt": "2018-09-12T14:00:08.000Z",
          "channelId": "UCZW5lIUz93q_aZIkJPAC0IQ",
          "title": "Joji - SLOW DANCING IN THE DARK",
          "description": "Stream \"SLOW DANCING IN THE DARK\": https://88rising.lnk.to/SDITD BALLADS 1 is out now: https://88rising.lnk.to/BALLADS1 BALLADS 1 vinyl, CDs & merch ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/K3Qzzggn--s/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/K3Qzzggn--s/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/K3Qzzggn--s/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "88rising",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/ac_iT6t_z5arbnlyycD2J8go4Rc\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "1BYr1br2Ee4"
        },
        "snippet": {
          "publishedAt": "2018-08-24T04:00:10.000Z",
          "channelId": "UC9CoOnJkIBMdeijd9qYoT_g",
          "title": "Ariana Grande - breathin (audio)",
          "description": "sweetener out now http://arianagrande.lnk.to/sweetener i love you.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/1BYr1br2Ee4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/1BYr1br2Ee4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/1BYr1br2Ee4/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Ariana Grande`",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/60epk36gW06k61_EMZmik4Cw2V8\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "f5d8pVg3Qtg"
        },
        "snippet": {
          "publishedAt": "2017-10-04T17:57:18.000Z",
          "channelId": "UCi7GJNg51C3jgmYTUwqoUXA",
          "title": "James Veitch Is A Terrible Roommate  - CONAN on TBS",
          "description": "When James' roommates offered him storage space in their shared bathroom, they had no idea how passionate he was about rubber ducks. More CONAN ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/f5d8pVg3Qtg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/f5d8pVg3Qtg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/f5d8pVg3Qtg/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Team Coco",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/x8lmbnGeSB7Lpvbsi8UTuGYAZmk\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "4kDklB6-69Q"
        },
        "snippet": {
          "publishedAt": "2018-04-06T04:00:20.000Z",
          "channelId": "UCkS8bfIrm38QCSQeOqRxR4A",
          "title": "Poo Bear ft. Justin Bieber & Jay Electronica - Hard 2 Face Reality (Lyric Video)",
          "description": "Poo Bear's Bearthday Album is out now! Listen Here ▷ https://poobear.lnk.to/BearthdayMusic Hard 2 Face Reality (Spotify) ▷ https://poobear.lnk.to/H2FR/spotify ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/4kDklB6-69Q/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/4kDklB6-69Q/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/4kDklB6-69Q/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Hannah Stocking",
          "liveBroadcastContent": "none"
        }
      }
    ];

    searchKeyword = async keyword => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC0ohFUZsmX5-uRuyKKNP7nHug97dvXIsg&maxResults=25&q=${keyword}&videoEmbeddable=true&type=video`
        );
        console.log(response);
        this.searchResults = response.hasOwnProperty("data")
          ? response.data.items
          : [];
      } catch (error) {
        console.error(error);
      }
    };
  },
  {
    searchResults: observable,
    searchKeyword: action,
  }
);
