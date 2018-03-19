(function(){
'use strict';

/**
 * @ngdoc function
 * @name app.services.simulator
 * # SimulatorSvc_
 */
angular
    .module( 'app.services.simulator', [

    ] )
    .factory( 'SimulatorSvc_', Simulator  );

/** @ngInject */
function Simulator( $q ) {

    var service = {
        getResource : getResource
      },

      resources = {
        get: {
          '/api/v1/classes?teacherId=281058': {
            "total": 3,
            "results": [
              {
                "classId": 1000,
                "leveling": "grl",
                "className": "Demystifying the Hipster"
              },
              {
                "classId": 2000,
                "leveling": "lexile",
                "className": "Invented Languages: Klingon and Beyond"
              },
              {
                "classId": 3000,
                "leveling": "grl",
                "className": "The Science of Superheroes"
              }
            ]
          },
          '/api/v1/students?teacherId=281058': {
            "total": 3,
            "results": [
              {
                "studentId": 301062,
                "firstName": "Pikachu",
                "lastName": "First"
              },
              {
                "studentId": 301065,
                "firstName": "Sherlock",
                "lastName": "Fourth"
              },
              {
                "studentId": 281060,
                "firstName": "Chintan",
                "lastName": "Jariwala"
              }
            ]
          },
          '/api/v1/reports/classes/1000/dashboard': {
            "totalMinutesRead": 500,
            "totalBooksReading": 25,
            "medianLexileMeasureLevel": "400L",
            "medianGrlLevel": null,
            "averageThinkMoreScore": 65,
            "totalPoints": 300,
            "totalGoalsMet": 25
          },
          '/api/v1/reports/classes/2000/dashboard': {
            "totalMinutesRead": 400,
            "totalBooksReading": 15,
            "medianLexileMeasureLevel": "300L",
            "medianGrlLevel": null,
            "averageThinkMoreScore": 55,
            "totalPoints": 200,
            "totalGoalsMet": 15
          },
          '/api/v1/reports/classes/3000/dashboard': {
            "totalMinutesRead": 600,
            "totalBooksReading": 35,
            "medianLexileMeasureLevel": "700L",
            "medianGrlLevel": null,
            "averageThinkMoreScore": 75,
            "totalPoints": 250,
            "totalGoalsMet": 35
          },
          '/api/v1/reports/teachers/281058/dashboard': {
            "totalMinutesRead": 945,
            "totalBooksReading": 567,
            "medianLexileMeasureLevel": "500L",
            "medianGrlLevel": null,
            "averageThinkMoreScore": 80,
            "totalPoints": 6000,
            "totalGoalsMet": 56
          },
          '/api/v1/me/readingGoalsx': {
            "total": 3,
            "results": [
              {
                "id": 1,
                "weekStartDate": 1508196433018,
                "weekGoal": {
                  "daysToRead": 7,
                  "minutesToRead": 30,
                  "minutesToReadPerDay": 30
                },
                "weekProgress": {
                  "totalDaysRead": 8,
                  "totalMinutesRead": 40
                }
              },
              {
                "id": 2,
                "weekStartDate": 1508196433018,
                "weekGoal": {
                  "daysToRead": 5,
                  "minutesToRead": 40,
                  "minutesToReadPerDay": 10
                },
                "weekProgress": {
                  "totalDaysRead": 2,
                  "totalMinutesRead": 10
                }
              },
              {
                "id": 3,
                "weekStartDate": 1548831600000,
                "weekGoal": {
                  "daysToRead": 4,
                  "minutesToRead": 190,
                  "minutesToReadPerDay": 30
                },
                "weekProgress": {
                  "totalDaysRead": 3,
                  "totalMinutesRead": 130
                }
              },
              {
                "id": 4,
                "weekStartDate": 1508196433018,
                "weekGoal": {
                  "daysToRead": 4,
                  "minutesToRead": 90,
                  "minutesToReadPerDay": 30
                },
                "weekProgress": {
                  "totalDaysRead": 6,
                  "totalMinutesRead": 120
                }
              },
            ]
          },
          '/api/v1/quizzes/9781566199094': {
            "id": 1,
            "bookISBN": "9780545775274",
            "bookTitle": "Crash (Tasdfasdfsahe Heights)",
            "status": "IN PROGRESS",
            "questions": [
                {
                    "id": 35,
                    "passage": "Johnny had to carry Franco back to the plane because",
                    "answers": [
                        "Franco was weak from a snake bite, even after receiving the antidote.",
                        "They were playing a game in which Franco could not touch the ground.",
                        "Franco twisted his ankle while hiking on a rock-strewn mountain.",
                        "Franco suffered a heat stroke during the peak hours of desert sun."
                    ],
                    "answerText": "",
                    "isCorrect": null,
                    "correctAnswerText": "",
                    "order": 1
                },
                {
                    "id": 45,
                    "passage": "Johnny wasn’t worried about running out of food because",
                    "answers": [
                        "he had packed enough in case of an emergency.",
                        "he knew how to hunt and prepare reptiles to eat.",
                        "there were cactus plants to eat in the desert.",
                        "there were many insects to give them protein."
                    ],
                    "answerText": "",
                    "isCorrect": null,
                    "correctAnswerText": "",
                    "order": 2
                },
            ]
          },
          '/api/v1/interests/interestCategories': {
            "total": 23,
            "results": [
              {
                "INTCAT_UID": "INTCAT001",
                "id": 1,
                "title": "Action & Adventure"
              },
              {
                "INTCAT_UID": "INTCAT002",
                "id": 2,
                "title": "Animals & Pets"
              },
              {
                "INTCAT_UID": "INTCAT003",
                "id": 3,
                "title": "Around the World"
              },
              {
                "INTCAT_UID": "INTCAT004",
                "id": 4,
                "title": "Emergency!"
              },
              {
                "INTCAT_UID": "INTCAT005",
                "id": 5,
                "title": "Family & Friends"
              },
              {
                "INTCAT_UID": "INTCAT006",
                "id": 6,
                "title": "Famous People"
              },
              {
                "INTCAT_UID": "INTCAT007",
                "id": 7,
                "title": "Favorite Stories"
              },
              {
                "INTCAT_UID": "INTCAT008",
                "id": 8,
                "title": "Folktales, Myths, & Legends"
              },
              {
                "INTCAT_UID": "INTCAT009",
                "id": 9,
                "title": "Fun & Games"
              },
              {
                "INTCAT_UID": "INTCAT010",
                "id": 10,
                "title": "Funny Stories"
              },
              {
                "INTCAT_UID": "INTCAT011",
                "id": 11,
                "title": "Great Jobs"
              },
              {
                "INTCAT_UID": "INTCAT012",
                "id": 12,
                "title": "Holidays & Celebrations"
              },
              {
                "INTCAT_UID": "INTCAT013",
                "id": 13,
                "title": "How Things Work"
              },
              {
                "INTCAT_UID": "INTCAT014",
                "id": 14,
                "title": "In the Past"
              },
              {
                "INTCAT_UID": "INTCAT015",
                "id": 15,
                "title": "Music & the Arts"
              },
              {
                "INTCAT_UID": "INTCAT016",
                "id": 16,
                "title": "Mysteries"
              },
              {
                "INTCAT_UID": "INTCAT017",
                "id": 17,
                "title": "Nature & the Earth"
              },
              {
                "INTCAT_UID": "INTCAT018",
                "id": 18,
                "title": "Numbers & Math"
              },
              {
                "INTCAT_UID": "INTCAT019",
                "id": 19,
                "title": "Realistic Fiction"
              },
              {
                "INTCAT_UID": "INTCAT020",
                "id": 20,
                "title": "Safe & Sound"
              },
              {
                "INTCAT_UID": "INTCAT021",
                "id": 21,
                "title": "Science Fiction & Fantasy"
              },
              {
                "INTCAT_UID": "INTCAT022",
                "id": 22,
                "title": "Space"
              },
              {
                "INTCAT_UID": "INTCAT023",
                "id": 23,
                "title": "The USA"
              }
            ]
          },
          '/api/v1/interests/bookRecommendations': {
            "total": 4,
            "results": [
              {
                "id": "9780545920274",
                "title": "Title",
                "cover": "../images/bookcovers/final-bookcover-08.jpg"
              },
              {
                "id": "9780545920273",
                "title": "Title",
                "cover": "../images/bookcovers/final-bookcover-10.jpg"
              },
              {
                "id": "9780545920272",
                "title": "Title",
                "cover": "../images/bookcovers/final-bookcover-11.jpg"
              },
              {
                "id": "9780545920271",
                "title": "Title",
                "cover": "../images/bookcovers/final-bookcover-13.jpg"
              }
            ]
          },
          '/api/v1/interests/seriesRecommendations': {
            "total": 4,
            "results": [
              {
                "id": "9780545920278",
                "title": "Title",
                "cover": "../images/bookcovers/final-bookcover-01.jpg"
              },
              {
                "id": "9780545920277",
                "title": "Title",
                "cover": "../images/bookcovers/final-bookcover-02.jpg"
              },
              {
                "id": "9780545920276",
                "title": "Title",
                "cover": "../images/bookcovers/final-bookcover-05.jpg"
              },
              {
                "id": "9780545920275",
                "title": "Title",
                "cover": "../images/bookcovers/final-bookcover-07.png"
              }
            ]
          },
          '/api/v1/assessments/current': {
            "id": 52, // Assessment identifier
            "studentId": 27,
            "testState": "IN_PROGRESS", // "practice", "progress", "orphaned", "completed",
            "isCurrent": true,
            "numberSkipsTaken": 0,
            "numberSkipsPossible": 3,
            "practiceQuestionsTaken": 0,
            "practiceQuestionsPossible": 3,
            "currentAssessmentQuestion": 13,
            "lexile": 480, // Lexile becomes more refined as questions are answered
            "created": "2016-11-15T10:15:00.000Z","question": {
              "id": 543,
              "practice": true,
              "title": "This is the title",
              "passage": "<p>What Lady of the Lamp was named for the Italian city where she was born?What Lady of the Lamp was named for the Italian city where she was born?What Lady of the Lamp was named for the Italian city where she was born?</p><p>What Lady of the Lamp was named for the Italian city where she was born?</p>",
              "fillInBlank": "The Lady of the Lamp was born in <blank/>.\n",
              "answers": [
              {"id": 1, "label": "<p>Italy</p>"},
              {"id": 2, "label": "<p>America</p>"},
              {"id": 3, "label": "<p>Germany</p>"},
              {"id": 4, "label": "Russia"}
              ]

            }
          },
          '/api/v1/assessments/current-new': {},
          '/api/v1/assessments/52': {
            "id": 52, // Assessment identifier
            "studentId": 27,
            "testState": "IN_PROGRESS", // "practice", "progress", "orphaned", "completed",
            "isCurrent": true,
            "numberSkipsTaken": 0,
            "numberSkipsPossible": 3,
            "practiceQuestionsTaken": 0,
            "practiceQuestionsPossible": 3,
            "currentAssessmentQuestion": 13,
            "question": {
              "id": 543,
              "practice": true,
              "title": "This is the title",
              "passage": "<p>What Lady of the Lamp was named for the Italian city where she was born?What Lady of the Lamp was named for the Italian city where she was born?What Lady of the Lamp was named for the Italian city where she was born?</p><p>What Lady of the Lamp was named for the Italian city where she was born?</p>",
              "fillInBlank": "The Lady of the Lamp was born in <blank/>.\n",
              "answers": [
              {"id": 1, "label": "<p>Italy</p>"},
              {"id": 2, "label": "<p>America</p>"},
              {"id": 3, "label": "<p>Germany</p>"},
              {"id": 4, "label": "Russia"}
              ]

            },
            "lexile": 480,
            "created": "2016-11-15T10:15:00.000Z"
          },
          '/api/v1/collections': {
            total: 4,
            results: [
              {
                "id": 1651,
                "type": "preexisting",
                "title": "Adventure Books",
                "userId": 292,
                "books": [
                  {
                    "id": "978043969666",
                    "title": "Super Fly Guy",
                    "author": "Tedd Arnold",
                    "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                    "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                    "cover": "path/to/cover/9780439696661.jpg",
                    "url": "path/to/ebook/",
                    "hasQuiz": true,
                    "hasAudio": true,
                    "ebook": true,
                    "lexile": "740L",
                    "guidedReadingLevel": "M",
                    "interests": [
                    {
                      "id": 1,
                      "title": "Action & Adventure"
                    },
                    {
                      "id": 8,
                      "title": "Sports & Hobbies"
                    }
                    ],
                    "series": {
                      "id": "9780545920278",
                      "title": "The 14 Fibs of Mr. Fibonacci"
                    },
                    "userContext": {
                      "userId": 32,
                      "bookId": "9780439696661",
                      "progress": 55,
                      "isOnLevel": true,
                      "dateAdded": "2016-11-08T10:15:00.000Z",
                      "dateStarted": "2016-11-15T10:15:00.000Z",
                      "dateLastActivity": "2016-11-17T10:15:00.000Z",
                      "dateCompleted": "2016-11-17T10:15:00.000Z",
                      "addedToMyBooks": true
                    }
                  },
                  {
                    "id": "978054775274",
                    "title": "Super Fly Guy",
                    "author": "Tedd Arnold",
                    "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                    "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                    "cover": "path/to/cover/9780545775274.jpg",
                    "url": "path/to/ebook/",
                    "hasQuiz": true,
                    "lexile": "740L",
                    "guidedReadingLevel": "M",
                    "interests": [
                    {
                      "id": 1,
                      "title": "Action & Adventure"
                    },
                    {
                      "id": 8,
                      "title": "Sports & Hobbies"
                    }
                    ],
                    "series": {
                      "id": "9780545920278",
                      "title": "The 14 Fibs of Mr. Fibonacci"
                    },
                    "userContext": {
                      "userId": 32,
                      "bookId": "9780545775274",
                      "progress": 55,
                      "isOnLevel": true,
                      "dateAdded": "2016-11-08T10:15:00.000Z",
                      "dateStarted": "2016-11-15T10:15:00.000Z",
                      "dateLastActivity": "2016-11-17T10:15:00.000Z",
                      "dateCompleted": "2016-11-17T10:15:00.000Z"
                    }
                  },
                  {
                    "id": "978043969661",
                    "title": "Super Fly Guy",
                    "author": "Tedd Arnold",
                    "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                    "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                    "cover": "path/to/cover/9780439696661.jpg",
                    "url": "path/to/ebook/",
                    "hasQuiz": true,
                    "ebook": true,
                    "lexile": "740L",
                    "guidedReadingLevel": "M",
                    "interests": [
                    {
                      "id": 1,
                      "title": "Action & Adventure"
                    },
                    {
                      "id": 8,
                      "title": "Sports & Hobbies"
                    }
                    ],
                    "series": {
                      "id": "9780545920278",
                      "title": "The 14 Fibs of Mr. Fibonacci"
                    },
                    "userContext": {
                      "userId": 32,
                      "bookId": "9780439696661",
                      "progress": 55,
                      "isOnLevel": true,
                      "dateAdded": "2016-11-08T10:15:00.000Z",
                      "dateStarted": "2016-11-15T10:15:00.000Z",
                      "dateLastActivity": "2016-11-17T10:15:00.000Z",
                      "dateCompleted": "2016-11-17T10:15:00.000Z"
                    }
                  }
                ]
              },
              {
                "id": 1652,
                "type": "preexisting",
                "title": "Adventure Books",
                "userId": 292,
                "books": [
                  {
                    "id": "970439696661",
                    "title": "Super Fly Guy",
                    "author": "Tedd Arnold",
                    "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                    "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                    "cover": "path/to/cover/9780439696661.jpg",
                    "url": "path/to/ebook/",
                    "hasQuiz": true,
                    "hasAudio": true,
                    "ebook": true,
                    "lexile": "740L",
                    "guidedReadingLevel": "M",
                    "interests": [
                    {
                      "id": 1,
                      "title": "Action & Adventure"
                    },
                    {
                      "id": 8,
                      "title": "Sports & Hobbies"
                    }
                    ],
                    "series": {
                      "id": "9780545920278",
                      "title": "The 14 Fibs of Mr. Fibonacci"
                    },
                    "userContext": {
                      "userId": 32,
                      "bookId": "9780439696661",
                      "progress": 55,
                      "isOnLevel": true,
                      "dateAdded": "2016-11-08T10:15:00.000Z",
                      "dateStarted": "2016-11-15T10:15:00.000Z",
                      "dateLastActivity": "2016-11-17T10:15:00.000Z",
                      "dateCompleted": "2016-11-17T10:15:00.000Z"
                    }
                  },
                  {
                    "id": "980439696661",
                    "title": "Super Duper Fly Guy",
                    "author": "Tedd Arnold",
                    "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                    "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                    "cover": "path/to/cover/9780439696661.jpg",
                    "url": "path/to/ebook/",
                    "hasQuiz": true,
                    "hasAudio": true,
                    "ebook": true,
                    "lexile": "740L",
                    "guidedReadingLevel": "M",
                    "interests": [
                    {
                      "id": 1,
                      "title": "Action & Adventure"
                    },
                    {
                      "id": 8,
                      "title": "Sports & Hobbies"
                    }
                    ],
                    "series": {
                      "id": "9780545920278",
                      "title": "The 14 Fibs of Mr. Fibonacci"
                    },
                    "userContext": {
                      "userId": 32,
                      "bookId": "9780439696661",
                      "progress": 55,
                      "isOnLevel": true,
                      "dateAdded": "2016-11-08T10:15:00.000Z",
                      "dateStarted": "2016-11-15T10:15:00.000Z",
                      "dateLastActivity": "2016-11-17T10:15:00.000Z",
                      "dateCompleted": "2016-11-17T10:15:00.000Z"
                    }
                  },
                  {
                    "id": "780439696661",
                    "title": "Uber Super Duper Fly Guy",
                    "author": "Tedd Arnold",
                    "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                    "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                    "cover": "path/to/cover/9780439696661.jpg",
                    "url": "path/to/ebook/",
                    "hasQuiz": true,
                    "hasAudio": true,
                    "ebook": true,
                    "lexile": "740L",
                    "guidedReadingLevel": "M",
                    "interests": [
                    {
                      "id": 1,
                      "title": "Action & Adventure"
                    },
                    {
                      "id": 8,
                      "title": "Sports & Hobbies"
                    }
                    ],
                    "series": {
                      "id": "9780545920278",
                      "title": "The 14 Fibs of Mr. Fibonacci"
                    },
                    "userContext": {
                      "userId": 32,
                      "bookId": "9780439696661",
                      "progress": 55,
                      "isOnLevel": true,
                      "dateAdded": "2016-11-08T10:15:00.000Z",
                      "dateStarted": "2016-11-15T10:15:00.000Z",
                      "dateLastActivity": "2016-11-17T10:15:00.000Z",
                      "dateCompleted": "2016-11-17T10:15:00.000Z"
                    }
                  },
                  {
                    "id": "978049696661",
                    "title": "Uber Super Duper Fly Guy With a Bag of Chips",
                    "author": "Tedd Arnold",
                    "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                    "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                    "cover": "path/to/cover/9780439696661.jpg",
                    "url": "path/to/ebook/",
                    "hasQuiz": true,
                    "hasAudio": true,
                    "ebook": true,
                    "lexile": "740L",
                    "guidedReadingLevel": "M",
                    "interests": [
                    {
                      "id": 1,
                      "title": "Action & Adventure"
                    },
                    {
                      "id": 8,
                      "title": "Sports & Hobbies"
                    }
                    ],
                    "series": {
                      "id": "9780545920278",
                      "title": "The 14 Fibs of Mr. Fibonacci"
                    },
                    "userContext": {
                      "userId": 32,
                      "bookId": "9780439696661",
                      "progress": 55,
                      "isOnLevel": true,
                      "dateAdded": "2016-11-08T10:15:00.000Z",
                      "dateStarted": "2016-11-15T10:15:00.000Z",
                      "dateLastActivity": "2016-11-17T10:15:00.000Z",
                      "dateCompleted": "2016-11-17T10:15:00.000Z"
                    }
                  }
                ]
              }
            ]
          },
          '/api/v1/collections/1651': {
            "id": 1651,
            "type": "preexisting",
            "title": "Adventure Books",
            "userId": 292,
            "books": [
              {
                "id": "9780439696661",
                "title": "Super Fly Guy",
                "author": "Tedd Arnold",
                "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                "cover": "path/to/cover/9780439696661.jpg",
                "url": "path/to/ebook/",
                "hasQuiz": true,
                "hasAudio": true,
                "ebook": true,
                "lexile": "740L",
                "guidedReadingLevel": "M",
                "interests": [
                  {
                    "id": 1,
                    "title": "Action & Adventure"
                  },
                  {
                    "id": 8,
                    "title": "Sports & Hobbies"
                  }
                ],
                "series": {
                  "id": "9780545920278",
                  "title": "The 14 Fibs of Mr. Fibonacci"
                },
                "userContext": {
                  "userId": 32,
                  "bookId": "9780439696661",
                  "progress": 55,
                  "isOnLevel": true,
                  "dateAdded": "2016-11-08T10:15:00.000Z",
                  "dateStarted": "2016-11-15T10:15:00.000Z",
                  "dateLastActivity": "2016-11-17T10:15:00.000Z",
                  "dateCompleted": "2016-11-17T10:15:00.000Z"
                }
              },
              {
                "id": "9780439696661",
                "title": "Super Duper Fly Guy",
                "author": "Tedd Arnold",
                "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                "cover": "path/to/cover/9780439696661.jpg",
                "url": "path/to/ebook/",
                "hasQuiz": true,
                "hasAudio": true,
                "ebook": true,
                "lexile": "740L",
                "guidedReadingLevel": "M",
                "interests": [
                  {
                    "id": 1,
                    "title": "Action & Adventure"
                  },
                  {
                    "id": 8,
                    "title": "Sports & Hobbies"
                  }
                ],
                "series": {
                  "id": "9780545920278",
                  "title": "The 14 Fibs of Mr. Fibonacci"
                },
                "userContext": {
                  "userId": 32,
                  "bookId": "9780439696661",
                  "progress": 55,
                  "isOnLevel": true,
                  "dateAdded": "2016-11-08T10:15:00.000Z",
                  "dateStarted": "2016-11-15T10:15:00.000Z",
                  "dateLastActivity": "2016-11-17T10:15:00.000Z",
                  "dateCompleted": "2016-11-17T10:15:00.000Z"
                }
              },
              {
                "id": "9780439696661",
                "title": "Uber Super Duper Fly Guy",
                "author": "Tedd Arnold",
                "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                "cover": "path/to/cover/9780439696661.jpg",
                "url": "path/to/ebook/",
                "hasQuiz": true,
                "hasAudio": true,
                "ebook": true,
                "lexile": "740L",
                "guidedReadingLevel": "M",
                "interests": [
                  {
                    "id": 1,
                    "title": "Action & Adventure"
                  },
                  {
                    "id": 8,
                    "title": "Sports & Hobbies"
                  }
                ],
                "series": {
                  "id": "9780545920278",
                  "title": "The 14 Fibs of Mr. Fibonacci"
                },
                "userContext": {
                  "userId": 32,
                  "bookId": "9780439696661",
                  "progress": 55,
                  "isOnLevel": true,
                  "dateAdded": "2016-11-08T10:15:00.000Z",
                  "dateStarted": "2016-11-15T10:15:00.000Z",
                  "dateLastActivity": "2016-11-17T10:15:00.000Z",
                  "dateCompleted": "2016-11-17T10:15:00.000Z"
                }
              },
              {
                "id": "9780439696661",
                "title": "Uber Super Duper Fly Guy With a Bag of Chips",
                "author": "Tedd Arnold",
                "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                "cover": "path/to/cover/9780439696661.jpg",
                "url": "path/to/ebook/",
                "hasQuiz": true,
                "hasAudio": true,
                "ebook": true,
                "lexile": "740L",
                "guidedReadingLevel": "M",
                "interests": [
                  {
                    "id": 1,
                    "title": "Action & Adventure"
                  },
                  {
                    "id": 8,
                    "title": "Sports & Hobbies"
                  }
                ],
                "series": {
                  "id": "9780545920278",
                  "title": "The 14 Fibs of Mr. Fibonacci"
                },
                "userContext": {
                  "userId": 32,
                  "bookId": "9780439696661",
                  "progress": 55,
                  "isOnLevel": true,
                  "dateAdded": "2016-11-08T10:15:00.000Z",
                  "dateStarted": "2016-11-15T10:15:00.000Z",
                  "dateLastActivity": "2016-11-17T10:15:00.000Z",
                  "dateCompleted": "2016-11-17T10:15:00.000Z"
                }
              },
              {
                "id": "9780439696661",
                "title": "Super Fly Guy",
                "author": "Tedd Arnold",
                "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                "cover": "path/to/cover/9780439696661.jpg",
                "url": "path/to/ebook/",
                "hasQuiz": true,
                "hasAudio": true,
                "ebook": true,
                "lexile": "740L",
                "guidedReadingLevel": "M",
                "interests": [
                  {
                    "id": 1,
                    "title": "Action & Adventure"
                  },
                  {
                    "id": 8,
                    "title": "Sports & Hobbies"
                  }
                ],
                "series": {
                  "id": "9780545920278",
                  "title": "The 14 Fibs of Mr. Fibonacci"
                },
                "userContext": {
                  "userId": 32,
                  "bookId": "9780439696661",
                  "progress": 55,
                  "isOnLevel": true,
                  "dateAdded": "2016-11-08T10:15:00.000Z",
                  "dateStarted": "2016-11-15T10:15:00.000Z",
                  "dateLastActivity": "2016-11-17T10:15:00.000Z",
                  "dateCompleted": "2016-11-17T10:15:00.000Z"
                }
              },
              {
                "id": "9780439696661",
                "title": "Super Fly Guy",
                "author": "Tedd Arnold",
                "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                "cover": "path/to/cover/9780439696661.jpg",
                "url": "path/to/ebook/",
                "hasQuiz": true,
                "hasAudio": true,
                "ebook": true,
                "lexile": "740L",
                "guidedReadingLevel": "M",
                "interests": [
                  {
                    "id": 1,
                    "title": "Action & Adventure"
                  },
                  {
                    "id": 8,
                    "title": "Sports & Hobbies"
                  }
                ],
                "series": {
                  "id": "9780545920278",
                  "title": "The 14 Fibs of Mr. Fibonacci"
                },
                "userContext": {
                  "userId": 32,
                  "bookId": "9780439696661",
                  "progress": 55,
                  "isOnLevel": true,
                  "dateAdded": "2016-11-08T10:15:00.000Z",
                  "dateStarted": "2016-11-15T10:15:00.000Z",
                  "dateLastActivity": "2016-11-17T10:15:00.000Z",
                  "dateCompleted": "2016-11-17T10:15:00.000Z"
                }
              },
              {
                "id": "9780439696661",
                "title": "Super Fly Guy",
                "author": "Tedd Arnold",
                "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                "cover": "path/to/cover/9780439696661.jpg",
                "url": "path/to/ebook/",
                "hasQuiz": true,
                "hasAudio": true,
                "ebook": true,
                "lexile": "740L",
                "guidedReadingLevel": "M",
                "interests": [
                  {
                    "id": 1,
                    "title": "Action & Adventure"
                  },
                  {
                    "id": 8,
                    "title": "Sports & Hobbies"
                  }
                ],
                "series": {
                  "id": "9780545920278",
                  "title": "The 14 Fibs of Mr. Fibonacci"
                },
                "userContext": {
                  "userId": 32,
                  "bookId": "9780439696661",
                  "progress": 55,
                  "isOnLevel": true,
                  "dateAdded": "2016-11-08T10:15:00.000Z",
                  "dateStarted": "2016-11-15T10:15:00.000Z",
                  "dateLastActivity": "2016-11-17T10:15:00.000Z",
                  "dateCompleted": "2016-11-17T10:15:00.000Z"
                }
              },
              {
                "id": "9780439696661",
                "title": "Super Fly Guy",
                "author": "Tedd Arnold",
                "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                "cover": "path/to/cover/9780439696661.jpg",
                "url": "path/to/ebook/",
                "hasQuiz": true,
                "hasAudio": true,
                "ebook": true,
                "lexile": "740L",
                "guidedReadingLevel": "M",
                "interests": [
                  {
                    "id": 1,
                    "title": "Action & Adventure"
                  },
                  {
                    "id": 8,
                    "title": "Sports & Hobbies"
                  }
                ],
                "series": {
                  "id": "9780545920278",
                  "title": "The 14 Fibs of Mr. Fibonacci"
                },
                "userContext": {
                  "userId": 32,
                  "bookId": "9780439696661",
                  "progress": 55,
                  "isOnLevel": true,
                  "dateAdded": "2016-11-08T10:15:00.000Z",
                  "dateStarted": "2016-11-15T10:15:00.000Z",
                  "dateLastActivity": "2016-11-17T10:15:00.000Z",
                  "dateCompleted": "2016-11-17T10:15:00.000Z"
                }
              },
              {
                "id": "9780439696661",
                "title": "Super Fly Guy",
                "author": "Tedd Arnold",
                "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                "cover": "path/to/cover/9780439696661.jpg",
                "url": "path/to/ebook/",
                "hasQuiz": true,
                "hasAudio": true,
                "ebook": true,
                "lexile": "740L",
                "guidedReadingLevel": "M",
                "interests": [
                  {
                    "id": 1,
                    "title": "Action & Adventure"
                  },
                  {
                    "id": 8,
                    "title": "Sports & Hobbies"
                  }
                ],
                "series": {
                  "id": "9780545920278",
                  "title": "The 14 Fibs of Mr. Fibonacci"
                },
                "userContext": {
                  "userId": 32,
                  "bookId": "9780439696661",
                  "progress": 55,
                  "isOnLevel": true,
                  "dateAdded": "2016-11-08T10:15:00.000Z",
                  "dateStarted": "2016-11-15T10:15:00.000Z",
                  "dateLastActivity": "2016-11-17T10:15:00.000Z",
                  "dateCompleted": "2016-11-17T10:15:00.000Z"
                }
              },
              {
                "id": "9780439696661",
                "title": "Super Fly Guy",
                "author": "Tedd Arnold",
                "directory" : "http://s3.amazonaws.com/epubs.scholastic.ereader/literacy-pro/9780545780988/",
                "description": "A boy named Buzz takes his pet fly to school, where it befriends a cafeteria worker. When he sees a fly in the lunch room, the principal fires the worker. Buzz and the fly plot to get the woman rehired.",
                "cover": "path/to/cover/9780439696661.jpg",
                "url": "path/to/ebook/",
                "hasQuiz": true,
                "hasAudio": true,
                "ebook": true,
                "lexile": "740L",
                "guidedReadingLevel": "M",
                "interests": [
                  {
                    "id": 1,
                    "title": "Action & Adventure"
                  },
                  {
                    "id": 8,
                    "title": "Sports & Hobbies"
                  }
                ],
                "series": {
                  "id": "9780545920278",
                  "title": "The 14 Fibs of Mr. Fibonacci"
                },
                "userContext": {
                  "userId": 32,
                  "bookId": "9780439696661",
                  "progress": 55,
                  "isOnLevel": true,
                  "dateAdded": "2016-11-08T10:15:00.000Z",
                  "dateStarted": "2016-11-15T10:15:00.000Z",
                  "dateLastActivity": "2016-11-17T10:15:00.000Z",
                  "dateCompleted": "2016-11-17T10:15:00.000Z"
                }
              }
            ]
          },
          '/api/v1/me': {
            "id": 292,
            "firstName": "Sheldon",
            "lastName": "Cooper",
            "role": "student",
            "username": "Scooper",
            "teacher": "Mr. Tiberius Kirk",
            "avatar": "",
            "grade": "2",
            "points": "100",
            "isReadinessAssessmentAssigned": true,
            "isReadinessAssessmentCompleted": false,
            "isLexileAssessmentAssigned": true,
            "isLexileAssessmentCompleted": false,
            "isInterestSurveyCompleted": false
          },
          '/api/v1/me/survey': {
            "avatar": "avatar-31",
            "interests": [
              {
                "id": 1,
                "title": "Action & Adventure",
              },
              {
                "id": 6,
                "title": "Famous People",
              }
            ],
            "preferences": {
              "likesReading": true,
              "likesSeries": true,
              "likesBooks": [
                {
                  "id": "9780545920278",
                  "title": "The Great Book of Bees",
                  "cover": "path/to/book/cover/9780545920278.png",
                  "liked": true
                },
                {
                  "id": "9780545743426",
                  "title": "Our Universe",
                  "cover": "path/to/book/cover/9780545743426.png",
                  "liked": false
                }
                ],
              "likesSeriesBooks": [
                {
                  "id": "1230545920278",
                  "title": "The Tower of Treasure",
                  "cover": "path/to/book/cover/1230545920278.png",
                  "liked": true
                },
                {
                  "id": "3450545743426",
                  "title": "Harry Potter and The Sorcerer's Stone",
                  "cover": "path/to/book/cover/3450545743426.png",
                  "liked": true
                },
                {
                  "id": "5670545920278",
                  "title": "Night of the Living Dummy",
                  "cover": "path/to/book/cover/5670545920278.png",
                  "liked": true
                },
                {
                  "id": "7890545743426",
                  "title": "The Adventures of Captain Underpants",
                  "cover": "path/to/book/cover/7890545743426.png",
                  "liked": false
                }
              ]

            },
            "goals": [
              {
                "key": "readingFrequency",
                "value": 3
              },
              {
                "key": "readingSessionDuration",
                "value": 20
              }
            ]
          },
          '/api/v1/me/sdm': {
            "sdm": "https://dp-portal-dev2.scholastic-labs.io",
            "navigationContext": {
            "user_id": "176225",
            "name": "James T",
            "portalBaseUrl": "https://dp-portal-dev2.scholastic-labs.io",
            "orgId": "922",
            "orgName": "ANTIOCH MIDDLE SCHOOL",
            "orgType": "school",
            "appCodes": [
              "litpro"
            ],
            "extSessionId": "DISC38f4d8de-c942-4825-8a6b-522782d2b09f",
            "extSessionEndpoint": "https://cnp0ebsm29.execute-api.us-east-1.amazonaws.com/dev2/extendedsession",
            "appCode": "litpro",
            "appId": "47",
            "parentOrgId": "923",
            "env": "dev2",
            "easyLogin": false,
            "role": "student"
            }
          },
          '/api/v1/me/dashboard': {
            'books': [
                {
                    "id": "9780545780988",
                    "title": "Chamelia",
                    "author": "Ethan Long",
                    "description": "Most chameleons like to blend in. But not Chamelia! When others zig, she zags. When others rock, she rolls. Chamelia's parents encourage her to stand out in her own special way.",
                    "cover": "path/to/cover/9780545780988.jpg",
                    "url": "path/to/ebook/",
                    "hasQuiz": true,
                    "hasAudio": true,
                    "ebook": true,
                    "lexile": "740L",
                    "guidedReadingLevel": "M",
                    "interests": [
                        {
                            "id": 1,
                            "title": "Action & Adventure"
                        },
                        {
                            "id": 8,
                            "title": "Sports & Hobbies"
                        }
                    ],
                    "series": "The Adventures of Chamelia",
                    "userContext": {
                        "userId": 32,
                        "bookId": "9780545775274", // ISBN needs to be a string.
                        "currentPage": 10,
                        "totalPages": 50,
                        "isOnLevel": true,
                        "dateAdded": "2016-11-08T10:15:00.000Z",
                        "dateStarted": "2016-11-15T10:15:00.000Z",
                        "dateLastActivity": "2016-11-17T10:15:00.000Z",
                        "dateCompleted": "2016-11-17T10:15:00.000Z"
                    }
                },
                {
                    "id": "9780545780988",
                    "title": "Chamelia",
                    "author": "Ethan Long",
                    "description": "Most chameleons like to blend in. But not Chamelia! When others zig, she zags. When others rock, she rolls. Chamelia's parents encourage her to stand out in her own special way.",
                    "cover": "path/to/cover/9780545780988.jpg",
                    "url": "path/to/ebook/",
                    "hasQuiz": true,
                    "hasAudio": true,
                    "ebook": true,
                    "lexile": "740L",
                    "guidedReadingLevel": "M",
                    "interests": [
                        {
                            "id": 1,
                            "title": "Action & Adventure"
                        },
                        {
                            "id": 8,
                            "title": "Sports & Hobbies"
                        }
                    ],
                    "series": "The Adventures of Chamelia",
                    "userContext": {
                        "userId": 32,
                        "bookId": "9780545775274", // ISBN needs to be a string.
                        "currentPage": 10,
                        "totalPages": 50,
                        "isOnLevel": true,
                        "dateAdded": "2016-11-08T10:15:00.000Z",
                        "dateStarted": "2016-11-15T10:15:00.000Z",
                        "dateLastActivity": "2016-11-17T10:15:00.000Z",
                        "dateCompleted": "2016-11-17T10:15:00.000Z"
                    }
                },
                {
                    "id": "9780545780988",
                    "title": "Chamelia",
                    "author": "Ethan Long",
                    "description": "Most chameleons like to blend in. But not Chamelia! When others zig, she zags. When others rock, she rolls. Chamelia's parents encourage her to stand out in her own special way.",
                    "cover": "path/to/cover/9780545780988.jpg",
                    "url": "path/to/ebook/",
                    "hasQuiz": true,
                    "hasAudio": true,
                    "ebook": true,
                    "lexile": "740L",
                    "guidedReadingLevel": "M",
                    "interests": [
                        {
                            "id": 1,
                            "title": "Action & Adventure"
                        },
                        {
                            "id": 8,
                            "title": "Sports & Hobbies"
                        }
                    ],
                    "series": "The Adventures of Chamelia",
                    "userContext": {
                        "userId": 32,
                        "bookId": "9780545775274", // ISBN needs to be a string.
                        "currentPage": 10,
                        "totalPages": 50,
                        "isOnLevel": true,
                        "dateAdded": "2016-11-08T10:15:00.000Z",
                        "dateStarted": "2016-11-15T10:15:00.000Z",
                        "dateLastActivity": "2016-11-17T10:15:00.000Z",
                        "dateCompleted": "2016-11-17T10:15:00.000Z"
                    }
                }
              ],
            "teacherRecommendations": [],
            "readingLog": {
                "minutesReadPerWeek": 18,
                "accumulatedPoints": 46
            }
          },
          '/api/v1/books?fileMakerProId=FMP00005441':  {
            "id": 42,                                           // Book identifier.
            "fileMakerProId": "FMP00000001",                    // FileMakerPro identifier.
            "title": "Fish",                                    // Title of book.
            "fictionNonfiction": "Nonfiction",                  // "Fiction" or "Nonfiction".
            "contributors": [                                   // Contributors (any contributor associated with the book)
                {
                    "name": "Christine Caputo",
                    "role": "Author"
                }
            ],
            "description": "What animals have gills, scales, and fins and live underwater? Fish! Learn what makes fish special and how they survive." ,                      // Book description based upon the user making the request (Calculated on the backend). This property should be avoided on future implementations.
            "studentDescription": "What animals have gills, scales, and fins and live underwater? Fish! Learn what makes fish special and how they survive.",                                                        // Book description tailored for student.
            "teacherDescription": "From sharks to minnows, all fish have gills, scales, and fins and live underwater. Using photographs and diagrams, this book teaches \"smart words\" about fish.",                // Book description tailored for the teacher.
            "cover": "path/to/cover.jpg",                       // Url path to cover image.
            "url": "path/to/ebook/",                            // Url path to epub document.
            "hasQuiz": false,                                   // Does the book have a quiz? (true or false)
            "hasAudio": false,                                  // Does the book have audio (true or false)
            "ebook": false,                                      // Is the book an ebook? (true or false)
            "lexile": "830L",                                   // The book's lexile level.
            "guidedReadingLevel": "Q",                          // The book's guided reading level.
            "interests": [                                      // Interests associated with the book.
                {
                    "id": 19,
                    "title": "Science & Technology",            // Interest title based upon the user making the request (Calculated on the backend). This property should be avoided on future implementations.
                    "youngerTitle": "How Things Work",          // Interest title tailored for preK to grade 2 users.
                    "olderTitle": "Science & Technology"        // Interest title tailored for grade 3 to grade 6+ users.
                },
                {
                    "id": 8,
                    "title": "Animals & Pets",                  // Interest title based upon the user making the request (Calculated on the backend). This property should be avoided on future implementations.
                    "youngerTitle": "Animals & Pets",           // Interest title tailored for preK to grade 2 users.
                    "olderTitle": "Animals & Pets"              // Interest title tailored for grade 3 to grade 6+ users.
                },
                {
                    "id": 23,
                    "title": "Nature & the Environment",        // Interest title based upon the user making the request (Calculated on the backend). This property should be avoided on future implementations.
                    "youngerTitle": "Nature & the Earth",       // Interest title tailored for preK to grade 2 users.
                    "olderTitle": "Nature & the Environment"    // Interest title tailored for grade 3 to grade 6+ users.
                }
            ],
            "genres": [                                         // Genres associated with the book.
                {
                    "id": 21,
                    "code": "IT",
                    "title": "Informational Text",              // Genre title based upon the user making the request (Calculated on the backend). This property should be avoided on future implementations.
                    "youngerTitle": "Informational Text",       // Genre title tailored for preK to grade 2 users.
                    "olderTitle": "Informational Text",         // Genre title tailored for grade 3 to grade 6+ users.
                    "filter": "Nonfiction"
                }
            ],
            "series": "Smart Words Reader",                     // A string or null value.
            "subseries": null,                                  // A string or null value.
            "pageCount": 32,                                    // The number of pages in the book.
            "pageRange": "50 or fewer",                         // The book's range of pages.
            "userContext": {
                "bookId": 42,
                "currentPage": 10,
                "totalPages": 50,
                "isOnLevel": true,
                "addedToMyBooks": true,                         // Possible values: true or false. Defaults to false.
                "dateLastActivity": 1508196433018,              // Time in milliseconds from epoch
                "dateCompleted": 1508196433018                  // Time in milliseconds from epoch
            }
          },
          '/api/v1/books?fileMakerProId=FMP00001769':  {
            "id": 42,                                           // Book identifier.
            "fileMakerProId": "FMP00000001",                    // FileMakerPro identifier.
            "title": "Fish",                                    // Title of book.
            "fictionNonfiction": "Nonfiction",                  // "Fiction" or "Nonfiction".
            "contributors": [                                   // Contributors (any contributor associated with the book)
                {
                    "name": "Christine Caputo",
                    "role": "Author"
                }
            ],
            "description": "What animals have gills, scales, and fins and live underwater? Fish! Learn what makes fish special and how they survive." ,                      // Book description based upon the user making the request (Calculated on the backend). This property should be avoided on future implementations.
            "studentDescription": "What animals have gills, scales, and fins and live underwater? Fish! Learn what makes fish special and how they survive.",                                                        // Book description tailored for student.
            "teacherDescription": "From sharks to minnows, all fish have gills, scales, and fins and live underwater. Using photographs and diagrams, this book teaches \"smart words\" about fish.",                // Book description tailored for the teacher.
            "cover": "path/to/cover.jpg",                       // Url path to cover image.
            "url": "path/to/ebook/",                            // Url path to epub document.
            "hasQuiz": true,                                   // Does the book have a quiz? (true or false)
            "hasAudio": false,                                  // Does the book have audio (true or false)
            "ebook": true,                                      // Is the book an ebook? (true or false)
            "lexile": "830L",                                   // The book's lexile level.
            "guidedReadingLevel": "Q",                          // The book's guided reading level.
            "interests": [                                      // Interests associated with the book.
                {
                    "id": 19,
                    "title": "Science & Technology",            // Interest title based upon the user making the request (Calculated on the backend). This property should be avoided on future implementations.
                    "youngerTitle": "How Things Work",          // Interest title tailored for preK to grade 2 users.
                    "olderTitle": "Science & Technology"        // Interest title tailored for grade 3 to grade 6+ users.
                },
                {
                    "id": 8,
                    "title": "Animals & Pets",                  // Interest title based upon the user making the request (Calculated on the backend). This property should be avoided on future implementations.
                    "youngerTitle": "Animals & Pets",           // Interest title tailored for preK to grade 2 users.
                    "olderTitle": "Animals & Pets"              // Interest title tailored for grade 3 to grade 6+ users.
                },
                {
                    "id": 23,
                    "title": "Nature & the Environment",        // Interest title based upon the user making the request (Calculated on the backend). This property should be avoided on future implementations.
                    "youngerTitle": "Nature & the Earth",       // Interest title tailored for preK to grade 2 users.
                    "olderTitle": "Nature & the Environment"    // Interest title tailored for grade 3 to grade 6+ users.
                }
            ],
            "genres": [                                         // Genres associated with the book.
                {
                    "id": 21,
                    "code": "IT",
                    "title": "Informational Text",              // Genre title based upon the user making the request (Calculated on the backend). This property should be avoided on future implementations.
                    "youngerTitle": "Informational Text",       // Genre title tailored for preK to grade 2 users.
                    "olderTitle": "Informational Text",         // Genre title tailored for grade 3 to grade 6+ users.
                    "filter": "Nonfiction"
                }
            ],
            "series": "Smart Words Reader",                     // A string or null value.
            "subseries": null,                                  // A string or null value.
            "pageCount": 32,                                    // The number of pages in the book.
            "pageRange": "50 or fewer",                         // The book's range of pages.
            "userContext": {
                "bookId": 42,
                "currentPage": 10,
                "totalPages": 50,
                "isOnLevel": true,
                "addedToMyBooks": true,                         // Possible values: true or false. Defaults to false.
                "dateLastActivity": 1508196433018,              // Time in milliseconds from epoch
                "dateCompleted": 1508196433018                  // Time in milliseconds from epoch
            }
          },
          '/api/v1/quizzes?bookId=1953': {
            "id": 2,
            "bookId": 1953,
            "bookTitle": "Mock Book",
            "questions": [ // Represents all questions for a book from the question bank.
              {
                  "id": 35,
                  "passage": "Johnny had to carry Franco back to the plane because",
                  "answers": [            // Array string of answers. Should be randomized.
                      "Franco was weak from a snake bite, even after receiving the antidote.",
                      "They were playing a game in which Franco could not touch the ground.",
                      "Franco twisted his ankle while hiking on a rock-strewn mountain.",
                      "Franco suffered a heat stroke during the peak hours of desert sun."
                  ],
                  "correctAnswerText": "Franco twisted his ankle while hiking on a rock-strewn mountain.",
                  "skill": "Make Inferences/Interpret",   // Should be set to null when not available.
                  "chapter": 1,                           // Should be set to null when not available.
                  "page": 6                               // Should be set to null when not available.
              },
              {
                  "id": 45,
                  "passage": "Johnny wasn’t worried about running out of food because",
                  "answers": [            // Array string of answers. Should be randomized.
                      "he had packed enough in case of an emergency.",
                      "he knew how to hunt and prepare reptiles to eat.",
                      "there were cactus plants to eat in the desert.",
                      "there were many insects to give them protein."
                  ],
                  "correctAnswerText": "he had packed enough in case of an emergency.",
                  "skill": "Make Inferences/Interpret",   // Should be set to null when not available.
                  "chapter": 2,                           // Should be set to null when not available.
                  "page": 13                              // Should be set to null when not available.
              }
            ]
          },
          '/api/v1/quizzes?bookId=410': {
            "id": 1,
            "bookId": 42,
            "bookTitle": "Crash (The Heights)",
            "questions": [ // Represents all questions for a book from the question bank.
                {
                    "id": 35,
                    "passage": "Johnny had to carry Franco back to the plane because",
                    "answers": [            // Array string of answers. Should be randomized.
                        "Franco was weak from a snake bite, even after receiving the antidote.",
                        "They were playing a game in which Franco could not touch the ground.",
                        "Franco twisted his ankle while hiking on a rock-strewn mountain.",
                        "Franco suffered a heat stroke during the peak hours of desert sun."
                    ],
                    "correctAnswerText": "Franco twisted his ankle while hiking on a rock-strewn mountain.",
                    "skill": "Make Inferences/Interpret",   // Should be set to null when not available.
                    "chapter": 1,                           // Should be set to null when not available.
                    "page": 6                               // Should be set to null when not available.
                },
                {
                    "id": 45,
                    "passage": "Johnny wasn’t worried about running out of food because",
                    "answers": [            // Array string of answers. Should be randomized.
                        "he had packed enough in case of an emergency.",
                        "he knew how to hunt and prepare reptiles to eat.",
                        "there were cactus plants to eat in the desert.",
                        "there were many insects to give them protein."
                    ],
                    "correctAnswerText": "he had packed enough in case of an emergency.",
                    "skill": "Make Inferences/Interpret",   // Should be set to null when not available.
                    "chapter": 2,                           // Should be set to null when not available.
                    "page": 13                              // Should be set to null when not available.
                }
            ]
        }
        },
        post: {
          '/api/v1/quizzes': {
              "id": 1,
              "bookISBN": "9780545775274",
              "bookTitle": "Crashashashash (The Heights)",
              "status": "IN PROGRESS",
              "questions": [
                  {
                      "id": 35,
                      "passage": "Johnny had to carry Franco back to the plane because",
                      "answers": [
                          "Franco was weak from a snake bite, even after receiving the antidote.",
                          "They were playing a game in which Franco could not touch the ground.",
                          "Franco twisted his ankle while hiking on a rock-strewn mountain.",
                          "Franco suffered a heat stroke during the peak hours of desert sun."
                      ],
                      "answerText": "",
                      "isCorrect": null,
                      "correctAnswerText": "",
                      "order": 1
                  },
                  {
                      "id": 45,
                      "passage": "Johnny wasn’t worried about running out of food because",
                      "answers": [
                          "he had packed enough in case of an emergency.",
                          "he knew how to hunt and prepare reptiles to eat.",
                          "there were cactus plants to eat in the desert.",
                          "there were many insects to give them protein."
                      ],
                      "answerText": "",
                      "isCorrect": null,
                      "correctAnswerText": "",
                      "order": 2
                  },
              ]

          },
          '/api/v1/assessments': {
            "id": 52, // Assessment identifier
            "studentId": 27,
            "testState": "IN_PROGRESS", // "practice", "progress", "orphaned", "completed",
            "isCurrent": true,
            "numberSkipsTaken": 0,
            "numberSkipsPossible": 3,
            "practiceQuestionsTaken": 0,
            "practiceQuestionsPossible": 3,
            "currentAssessmentQuestion": 13,
            "question": {
              "id": 543,
              "practice": true,
              "title": "This is the title",
              "passage": "<p>What Lady of the Lamp was named for the Italian city where she was born?What Lady of the Lamp was named for the Italian city where she was born?What Lady of the Lamp was named for the Italian city where she was born?</p><p>What Lady of the Lamp was named for the Italian city where she was born?</p>",
              "fillInBlank": "The Lady of the Lamp was born in <blank/>.\n",
              "answers": [
              {"id": 1, "label": "<p>Italy</p>"},
              {"id": 2, "label": "<p>America</p>"},
              {"id": 3, "label": "<p>Germany</p>"},
              {"id": 4, "label": "Russia"}
              ]
            },
            "lexile": 480, // Lexile becomes more refined as questions are answered
            "created": "2016-11-15T10:15:00.000Z"
          },
          '/api/v1/assessments/52/answer': {
            "id": 52, // Assessment identifier
            "studentId": 27, // Student identifier
            "testState": "FINISHED", //PRACTICE,IN_PROGRESS,FINISHED,CANCELLED,SUSPENDED
            "numberSkipsTaken": 0,
            "numberSkipsPossible": 3,
            "practiceQuestionsTaken": 0,
            "practiceQuestionsPossible": 0,
            "currentAssessmentQuestion": 13,
            "question": {},
            "lexile": 480, // Lexile becomes more refined as questions are answered
            "dateAssigned": "2016-11-08T10:15:00.000Z",
            "dateStarted": "2016-11-15T10:15:00.000Z",
            "dateLastActivity": "2016-11-15T10:15:00.000Z"
          }
        },
        put: {
          '/api/v1/me/interests': {
            "interests": [1, 6, 12]
          },
          '/api/v1/me': {
            "avatar": "avatar-01"
          },
          '/api/v1/me/preferences': {
            "likesReading": true,
            "likesSeries": true,
            "likesBooks": [
              {
                "id": "9780545920278",
                "liked": true
              },
              {
                "id": "9780545743426",
                "liked": false
              }
              ],
              "likesSeriesBooks": [
              {
                "id": "1230545920278",
                "liked": true
              },
              {
                "id": "3450545743426",
                "liked": true
              },
              {
                "id": "5670545920278",
                "liked": true
              },
              {
                "id": "7890545743426",
                "liked": false
              }
            ]
          }
        },
        delete: {
        }
      },

      // Look in getResouce to turn off whitelisting
      whitelist = {
        get: [
          '/api/v1/collections',
          '/api/v1/collections/1651',
          '/api/v1/interests/seriesRecommendations',
          '/api/v1/interests/bookRecommendations',
          '/api/v1/me/sdm',
          '/api/v1/me/readingGoalsx',
          '/api/v1/quizzes/9781566199094',
          '/api/v1/books?fileMakerProId=FMP00005441',
          '/api/v1/books?fileMakerProId=FMP00001769',
          '/api/v1/quizzes?bookId=410',
          '/api/v1/quizzes?bookId=1953',
          // '/api/v1/assessments/current',
          // '/api/v1/assessments/52'
        ],
        post: [
          '/api/v1/quizzes'
        ],
        put: [],
        delete: []
      };

    return service;

    // public defs
    /**
     * Method updates the state of the url without reloading
     * the browser window.
     * @param {string} resource - path to resource
     */
    function getResource(meth, resource) {
        var deferred = $q.defer(),
        method = meth || 'get',
        parser = document.createElement('a'),

        result;


        // Use element parser to extract pathname
        parser.href = resource;
        resource = parser.pathname + parser.search;

        result = resources[method][resource] || null;

        // Comment out this line to turn off whitelisting
        result = (whitelist[method].indexOf(resource) > -1) ? result : null;

        if (result) {
            deferred.resolve(angular.copy(result));
        } else {
            deferred.reject(angular.copy(result));
        }

        return deferred.promise;
    }
}
}());
