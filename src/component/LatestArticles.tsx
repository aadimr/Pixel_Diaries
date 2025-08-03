import React from 'react'
import LatestArticlesCard from './LatestArticlesCard';

interface Article {
  heading: string;
  image: string;
  shortCont: string;
}

const data: Article[] = [
  {
    heading: "abc",
    image: "/image1.jpg",
    shortCont: "dsgvmndergvnoiuterghervnfdsveriogfmjerfjwasdxmkascpsmdvfregertgvfdvfdgtreghtregb",
  },
  {
    heading: "xyz",
    image: "/image2.jpg",
    shortCont: "asdlmoklfjerrgfdjcsnxdjqdneuifjhv dcnvcerkgfjifdvhjdscndkvffcvd vfdvrf",
  },
  {
    heading: "pqr",
    image: "/image3.avif",
    shortCont: "alkjopswdfjerkoivnmddsdwlsefnjkcvbsdkcblwefhiusdjkcnbsdjdnbqikjdsweigfndvxcjhsdheiuf",
  }
]

function LatestArticles() {
  return (
    <div className="grid grid-cols-3 gap-10 px-[2rem] pt-[5rem]">
      {
        data.map(({ heading, image, shortCont }) => {
          return <LatestArticlesCard
            key={heading}
            heading={heading}
            image={image}
            shortCont={shortCont}
          />
        })
      }
    </div>
  )
}

export default LatestArticles;