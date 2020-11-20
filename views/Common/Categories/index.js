import React, { useEffect, useState } from 'react'
import { CardFilledWithImage as Card } from '../../../components/Cards/Cards'
import { useRouter } from 'next/router'
import { fetchCategories } from '../../../services/fetchCategories'

// const Card = ({ clickHandler }) => (
//   <CardFilledWithImage
//     clickHandler={clickHandler}
//     title="Yoga"
//     subTitle="234 learners"
//     src="/yoga.jpg"
//   />
// );

const Index = () => {
  const router = useRouter()

  const [categories, setCategories] = useState(null)

  useEffect(() => {
    fetchCategories()
      .then((res) => {
        console.log('Categories in Index.js', res)
        setCategories(res)
      })
      .catch((e) => console.log(e))
  }, [])

  const handleRedirect = () => {
    router.push('/search')
  }

  if (categories !== null) {
    console.log('In Index.js', categories)
  }

  return (
    <div className="w-full">
      <h3 className="text-2xl text-primary p-2 font-semibold">Categories</h3>
      {categories !== null && (
        <div className="w-full grid grid-flow-row grid-cols-2 gap-6">
          {
            categories.map((category) => (
              <Card
                src={category.avatar}
                title={category.title}
                subTitle={category.seeker_count}
                clickHandler={handleRedirect}
              />
            ))
            /* <Card
          title="Yoga"
          subTitle="234 learners"
          src="/yoga.jpg"
          clickHandler={handleRedirect}
        />
        <Card
          title="Music"
          subTitle="5673 learners"
          src="/stock/music.jpg"
          clickHandler={handleRedirect}
        />
        <Card
          title="Dance"
          subTitle="1687 learners"
          src="/stock/dance.jpg"
          clickHandler={handleRedirect}
        />
        <Card
          title="Stock Market"
          subTitle="13463 learners"
          src="/stock/market.jpg"
          clickHandler={handleRedirect}
        />
        <Card
          title="Guitar"
          subTitle="1657 learners"
          src="/stock/guitar.jpg"
          clickHandler={handleRedirect}
        />
        <Card
          title="Photography"
          subTitle="1355 learners"
          src="/stock/photography.jpg"
          clickHandler={handleRedirect}
        /> */
          }
        </div>
      )}
    </div>
  )
}

export default Index
