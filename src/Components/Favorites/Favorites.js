import { useContext } from "react";
import { listContext } from "../../index.js";
import MovieCard from "../MovieCard.js";
const Favorites = () => {
  const context = useContext(listContext);

  return (
    <div className="favorite-list">
      {context.favorites.map((movie, index) => {
        return (
          <MovieCard
            idx={index}
            movie={movie}
            isInFavourites={true}
            // handleFavourites={handleFavourites}
          />
        );
      })}
    </div>
  );
};

export default Favorites;

/*
{
  "adult": false,
  "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
  "belongs_to_collection": null,
  "budget": 25000000,
  "genres": [
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 80,
      "name": "Crime"
    }
  ],
  "homepage": "",
  "id": 278,
  "imdb_id": "tt0111161",
  "original_language": "en",
  "original_title": "The Shawshank Redemption",
  "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
  "popularity": 113.463,
  "poster_path": "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
  "production_companies": [
    {
      "id": 97,
      "logo_path": "/7znWcbDd4PcJzJUlJxYqAlPPykp.png",
      "name": "Castle Rock Entertainment",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "1994-09-23",
  "revenue": 28341469,
  "runtime": 142,
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "Fear can hold you prisoner. Hope can set you free.",
  "title": "The Shawshank Redemption",
  "video": false,
  "vote_average": 8.704,
  "vote_count": 25727
}
*/

/*
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
      "genre_ids": [
        878,
        10749,
        35
      ],
      "id": 792307,
      "original_language": "en",
      "original_title": "Poor Things",
      "overview": "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
      "popularity": 1058.915,
      "poster_path": "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
      "release_date": "2023-12-07",
      "title": "Poor Things",
      "video": false,
      "vote_average": 8,
      "vote_count": 1839
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        18,
        35
      ],
      "id": 1190745,
      "original_language": "pt",
      "original_title": "Poor Rich Boys",
      "overview": "Two friends start a new venture to become young millionaires",
      "popularity": 1.508,
      "poster_path": "/txn1GBI3zXAU7W5VYMru0H23ThQ.jpg",
      "release_date": "2024-02-03",
      "title": "Poor Rich Boys",
      "video": false,
      "vote_average": 5,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": "/37ApHRcRXPVIucaOG0Uwltx9IXQ.jpg",
      "genre_ids": [
        10749,
        35
      ],
      "id": 80439,
      "original_language": "it",
      "original_title": "Belle ma povere",
      "overview": "Romolo and Salvatore look for jobs to impress their girlfriends, but things get complicated when their old flame Giovanna reappears.",
      "popularity": 4.433,
      "poster_path": "/mosVFn7d2OvUxk1JTQHlb7tFLQ4.jpg",
      "release_date": "1957-12-20",
      "title": "Poor Girl, Pretty Girl",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 26
    },
    {
      "adult": false,
      "backdrop_path": "/rfDK1lA4tmwkAmZKitdWT5b1YQL.jpg",
      "genre_ids": [
        35,
        10749
      ],
      "id": 43571,
      "original_language": "it",
      "original_title": "Un Povero Ricco",
      "overview": "Pozzetto is a rich man obsessed by the idea of becoming poor. So, his psychiatric suggests him to leave home and live just like a poor man for some days. He will then become familiar with this way of living, and fear less the idea of becoming poor. So he does, and his old family & friends soon forget about him. They don't miss him at all.",
      "popularity": 8.14,
      "poster_path": "/3CQOegNJTTj7UXmf1CLBu8m463D.jpg",
      "release_date": "1983-03-30",
      "title": "Rich and Poor",
      "video": false,
      "vote_average": 6.101,
      "vote_count": 119
    },
    {
      "adult": false,
      "backdrop_path": "/f7f36g8kz1w8sh5VtSXmAozQfW1.jpg",
      "genre_ids": [
        35
      ],
      "id": 464595,
      "original_language": "it",
      "original_title": "Poveri ma ricchissimi",
      "overview": "The Tucci family discovers that they have not really lost all their money and, refusing to pay Italian taxes, decides to turn Torresecca into a tax haven, relying on a post-Italian unification bureaucratic oversight.",
      "popularity": 8.911,
      "poster_path": "/z3oIKWTybECmYTtnqDtgF6gfFCA.jpg",
      "release_date": "2017-12-14",
      "title": "Poor but Richer",
      "video": false,
      "vote_average": 5.691,
      "vote_count": 262
    },
    {
      "adult": false,
      "backdrop_path": "/sTSKcfoD0m1vgrnCinc6FKJfSDV.jpg",
      "genre_ids": [
        28,
        18
      ],
      "id": 449777,
      "original_language": "hi",
      "original_title": "Poorna",
      "overview": "An Adivasi 13-year-old from Telangana becomes the youngest girl in history to climb Mount Everest.",
      "popularity": 2.722,
      "poster_path": "/y6uxbfWtnvXvqoM6kDK4k8qsigd.jpg",
      "release_date": "2017-03-31",
      "title": "Poorna",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 11
    },
    {
      "adult": false,
      "backdrop_path": "/xdDnTXhPd7q0gKu6KpDoZ9F3xeC.jpg",
      "genre_ids": [
        35
      ],
      "id": 427989,
      "original_language": "it",
      "original_title": "Poveri ma ricchi",
      "overview": "The \"Tucci\" are a poor Italian family living in a small village in Lazio. Father, mother, a conceited daughter and a genius son, forced to pretend being stupid to keep up with the family. One day something unexpected happens: the family wins one hundred million Euros. Excited, they decide to keep the winning a secret, but as soon as a single word slips out from the mouth of the householder, they only have one choice to avoid being persecuted by friends and acquaintances: run away. They leave at night, heading to Milan. They will realize as soon as they arrive that today's rich people behaves very differently from the past, and being rich has become a real bother... this discovery will make things way different from what Tuccis' expected.",
      "popularity": 10.777,
      "poster_path": "/mNhi8Xhtu2abtGqLCZqRxKzSVml.jpg",
      "release_date": "2016-12-15",
      "title": "Poor but Rich",
      "video": false,
      "vote_average": 6.03,
      "vote_count": 397
    },
    {
      "adult": false,
      "backdrop_path": "/tXPCJDP3oXJi91TVaxV0CUZdfZc.jpg",
      "genre_ids": [
        35,
        16
      ],
      "id": 88013,
      "original_language": "fr",
      "original_title": "Pauvre Pierrot",
      "overview": "One night, Arlequin comes to see his lover Colombine. But then Pierrot knocks at the door and Colombine and Arlequin hide. Pierrot starts singing but Arlequin scares him and the poor man goes away.",
      "popularity": 7.654,
      "poster_path": "/hRgvqBCUA9i3OA9uhIRffKN8TB6.jpg",
      "release_date": "1892-10-28",
      "title": "Poor Pierrot",
      "video": false,
      "vote_average": 6.1,
      "vote_count": 93
    },
    {
      "adult": false,
      "backdrop_path": "/pYFxHXvP62JJeroF4Gzi1HZeag2.jpg",
      "genre_ids": [
        10749,
        35
      ],
      "id": 61829,
      "original_language": "it",
      "original_title": "Poveri ma belli",
      "overview": "Salvatore and Romolo are two young and poor young men that are neighbours and friends. They live with their parents in Piazza Navona, Rome. They are poor but handsome, and both fall in love with Giovanna.",
      "popularity": 6.351,
      "poster_path": "/jiy9XBhZaCgta5PLJl3cI5aG27L.jpg",
      "release_date": "1957-01-23",
      "title": "Poor But Beautiful",
      "video": false,
      "vote_average": 6.725,
      "vote_count": 71
    },
    {
      "adult": false,
      "backdrop_path": "/nsYvFJLZf7sy02fRrCY7XyUOx2L.jpg",
      "genre_ids": [
        35
      ],
      "id": 341719,
      "original_language": "sh",
      "original_title": "Sirota Marija",
      "overview": "A sickly village girl wants to marry a house painter, who only prefers to fool around.",
      "popularity": 2.187,
      "poster_path": "/5z59wT2HYDvwsCWXqZiwgL1o518.jpg",
      "release_date": "1968-01-01",
      "title": "Poor Maria",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 3
    },
    {
      "adult": false,
      "backdrop_path": "/qxncAxaSl8LztlPXUQXxawBgTrh.jpg",
      "genre_ids": [
        18
      ],
      "id": 53510,
      "original_language": "es",
      "original_title": "Nosotros los pobres",
      "overview": "A poor neighborhood in Mexico City. Carpenter Pepe el Toro lives peacefully with his daughter Chachita while woos the pretty Celia, but tragedy knocks his door when he is falsely accused of having perpetrated a felony.",
      "popularity": 5.181,
      "poster_path": "/3NKT6FNlLvk0f14voE0FJHp9nP0.jpg",
      "release_date": "1948-03-25",
      "title": "We the Poor",
      "video": false,
      "vote_average": 8.026,
      "vote_count": 97
    },
    {
      "adult": false,
      "backdrop_path": "/wwkxdV3TINrBvIgNZVToPsFRN0C.jpg",
      "genre_ids": [
        18,
        36,
        10770
      ],
      "id": 149043,
      "original_language": "it",
      "original_title": "Giuseppe Moscati: L'amore che guarisce",
      "overview": "Giuseppe Moscati, Doctor saint of Naples, was a doctor of the early twentieth century, from an aristocratic family devoted his career to serving the poor.  The film focuses on the human side, partially leaving aside the spiritual part.",
      "popularity": 6.313,
      "poster_path": "/7oXclgK41bNQu79xDej0f3QRIzT.jpg",
      "release_date": "2007-09-26",
      "title": "St. Giuseppe Moscati: Doctor to the Poor",
      "video": false,
      "vote_average": 7.879,
      "vote_count": 29
    },
    {
      "adult": false,
      "backdrop_path": "/2Z8CFVUw9cqBLE7HMtlAlvGjnvB.jpg",
      "genre_ids": [
        35
      ],
      "id": 288921,
      "original_language": "it",
      "original_title": "Poveri milionari",
      "overview": "After a series of misunderstandings and other unfortunate incidents, the honeymoon of two young couples ends sooner than planned. Back at their starting point, the ensuing conflict leads to one of the couples separating. Salvatore, who moves away, is hit in the street by a car and loses his memory: he has lost his memories of his friends and family - until he meets his wife Marisa, in which he falls in love again ...",
      "popularity": 3.683,
      "poster_path": "/gImntguCWSR3CXIs5avRxbr5kKM.jpg",
      "release_date": "1959-05-02",
      "title": "Poor Millionaires",
      "video": false,
      "vote_average": 5.9,
      "vote_count": 27
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        18,
        35
      ],
      "id": 518290,
      "original_language": "en",
      "original_title": "Poor Jane",
      "overview": "A housewife's comfortable life unravels when she suddenly stops loving her husband.",
      "popularity": 1.747,
      "poster_path": "/fQXkk3UkmNCjmymZnSqbi9PVmBh.jpg",
      "release_date": "2018-03-03",
      "title": "Poor Jane",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/AkWcI07TKhhRHq4FksoxX5LoCIt.jpg",
      "genre_ids": [
        35,
        10751
      ],
      "id": 678585,
      "original_language": "es",
      "original_title": "Pobre Familia Rica, Cuando la $uerte se Acaba",
      "overview": "After winning the lottery 15 years ago, Tino and his family start experiencing economical problems. Tino askes his neighbor for help, but his neighbor has his own issues too.",
      "popularity": 2.154,
      "poster_path": "/umHAwDBTjm5gNCS7ostYrSmvREA.jpg",
      "release_date": "2020-05-08",
      "title": "Poor Rich Family",
      "video": false,
      "vote_average": 6,
      "vote_count": 4
    },
    {
      "adult": false,
      "backdrop_path": "/19pPgJa9c3zxDGIcyoTH0IvWU2n.jpg",
      "genre_ids": [
        35
      ],
      "id": 10371,
      "original_language": "en",
      "original_title": "For Richer or Poorer",
      "overview": "Brad Sexton and his wife, Caroline, are wealthy New Yorkers with both marital and financial problems. The latter issue becomes a pressing matter when they discover that their accountant has embezzled millions and pinned the blame on them. Forced to go on the lam, Brad and Caroline end up in an Amish area of Pennsylvania and decide to pose as members of the religious group to evade the IRS. As the two adapt to the simple Amish lifestyle, they begin to reconnect.",
      "popularity": 12.377,
      "poster_path": "/tPjqY9Qp5WOIBFKnyEpMBVwGr01.jpg",
      "release_date": "1997-12-11",
      "title": "For Richer or Poorer",
      "video": false,
      "vote_average": 5.954,
      "vote_count": 218
    },
    {
      "adult": false,
      "backdrop_path": "/mu0G8tE9eCUNyTqDgsd2x2Iw1aB.jpg",
      "genre_ids": [
        35,
        18,
        36
      ],
      "id": 37175,
      "original_language": "ru",
      "original_title": "О бедном гусаре замолвите слово",
      "overview": "The small town agog Hussars entry. Love between cornet and the young actress suddenly faces intrigue made by a St. Petersburg bureaucrat. The actress father dies after being involved in this game and perspectives look dark... But evil will eventually be defeated by the nobility, loyalty and love.",
      "popularity": 3.576,
      "poster_path": "/xmvYMUmZHcqWubgaU23oyKpF4Wm.jpg",
      "release_date": "1980-01-01",
      "title": "Say a Word for the Poor Hussar",
      "video": false,
      "vote_average": 7,
      "vote_count": 32
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 389666,
      "original_language": "de",
      "original_title": "Arm wie eine Kirchenmaus",
      "overview": "Comedy about an ambitious woman who starts working at a bank.",
      "popularity": 1.539,
      "poster_path": "/4MkYPFx0XU5V4JS9sZ8vVQLhEnP.jpg",
      "release_date": "1931-11-05",
      "title": "Poor as a Church Mouse",
      "video": false,
      "vote_average": 5.5,
      "vote_count": 2
    },
    {
      "adult": false,
      "backdrop_path": "/371hxoroatE0dkctljAdDpoNB88.jpg",
      "genre_ids": [
        35
      ],
      "id": 158343,
      "original_language": "fr",
      "original_title": "Pauvre Richard!",
      "overview": "It is in a small popular district that the pot of the Eurogagnant, 124 million euros, is won - But who is the lucky winner?",
      "popularity": 1.495,
      "poster_path": "/gwwGPiVEm3LVZeWqFjO97AxN417.jpg",
      "release_date": "2013-01-16",
      "title": "Poor Richard!",
      "video": false,
      "vote_average": 4.9,
      "vote_count": 13
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        18
      ],
      "id": 208783,
      "original_language": "ru",
      "original_title": "Бедный, бедный Павел",
      "overview": "Lenfilm's most recent major production spins a kind of historical fantasy based on real incidents that's full of ominous implications for today. One night, a patrol rushes into the chambers of the Russian prince Pavel, son of the Empress Catherine; the Empress has died, and Pavel is to be anointed the new Tsar. Thought to be feeble-minded at best and crazy at worst, Pavel soon lives up to his enemies' fears: he dismisses long-serving courtiers, demands that peasants only work three days a week, and declares that state officials should start their days at 5 am. Soon, it seems that everyone who can is trying to hatch some kind of plot against him - including his own sons. Sumptuously designed, POOR POOR PAVEL constrasts the imperial splendor of the court with the sordid atmosphere of conspiracies and backstabbing that comes to define these characters' lives.",
      "popularity": 1.677,
      "poster_path": "/1i2cvncQc4z61zvxaFaGq4REEzp.jpg",
      "release_date": "2003-06-21",
      "title": "Poor, Poor Pavel",
      "video": false,
      "vote_average": 3,
      "vote_count": 7
    }
  ],
  "total_pages": 15,
  "total_results": 289
}*/
