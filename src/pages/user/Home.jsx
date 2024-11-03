import React from "react";
import Resgister from "../../components/user/form/Resgister";
import CardProduct from "../../components/user/card/CardProduct";
import useCartStore from "../../store/cartStore";
import { Burger, Button, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CardCategory from "../../components/user/card/CardCategory";
import Hero from "../../components/user/Hero";
import { Carousel } from "@mantine/carousel";
import { useProducts } from "../../hook/useProduct";
// import { Carousel } from '@mantine/carousel';
function Home(){
  // const data = [
  //     { id: 1, image: 'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8', name: 'Product 1', price: '100$' },
  //     { id: 2, image: 'https://plus.unsplash.com/premium_photo-1695302441138-f68978135eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', name: 'Product 2', price: '150$' },
  //     { id: 3, image: 'https://images.unsplash.com/photo-1725406029195-f0afc31b2f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8', name: 'Product 3', price: '200$' }
  // ];
  // const [opened, { open, close, toggle }] = useDisclosure(false);
  const { products, loading } = useProducts();
  return (
<>
<div className="flex flex-col gap-10">
  <section>
  <Carousel
      withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      loop
      align="start"
    >
      <Carousel.Slide>
        <div className="bg-red-500">
          1
        </div>
        </Carousel.Slide>
      <Carousel.Slide>
        <div className="bg-red-500">
         2
        </div>
        </Carousel.Slide>
      <Carousel.Slide>
        <div className="bg-red-500">
        3
        </div>
        </Carousel.Slide>
      <Carousel.Slide>
        <div className="bg-red-500">
        4
        </div>
        </Carousel.Slide>
      <Carousel.Slide>
        <div className="bg-red-500">
       5
        </div>
        </Carousel.Slide>
    </Carousel>
  </section>
    <section>
        <div className="my-16 flex justify-center">
            <h3 className="font-bold text-3xl">Shop By Category</h3>
        </div>
        <div className="px-20 grid grid-cols-5 gap-5">
        <CardCategory 
  image="https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Category-List-Img-2.webp" 
  title="Giaps Giaps" 
  quantity="15" 
/>
        <CardCategory 
  image="https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Category-List-Img-2.webp" 
  title="Giaps Giaps" 
  quantity="15" 
/>
        <CardCategory 
  image="https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Category-List-Img-2.webp" 
  title="Giaps Giaps" 
  quantity="15" 
/>
        <CardCategory 
  image="https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Category-List-Img-2.webp" 
  title="Giaps Giaps" 
  quantity="15" 
/>
        <CardCategory 
  image="https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Category-List-Img-2.webp" 
  title="Giaps Giaps" 
  quantity="15" 
/>

        </div>
    </section>

        <Hero/>
        <section>
        <div className="grid grid-cols-4 gap-5 px-20">
        {products.map((product) => (
        <CardProduct
          key={product.id}
          id= {product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
        </div>
        <div className="">123</div>
    </section>
</div>
</>
    //   <div className="">
    //     <Button className="!bg-red-600">Submit</Button>
    //     <Burger opened={opened} onClick={toggle}  aria-label="Toggle navigation" />
    //     <Drawer opened={opened} onClose={close} title="Authentication">
    //     {/* Drawer content */}
    //   </Drawer>
    //       <div className="text-5xl text-red-800 font-bold">Home</div>
    //       <Resgister />
    //       <section className="grid grid-cols-3 gap-4 mt-6">
    //           {/* Sử dụng map() để duyệt qua mảng data và render từng sản phẩm */}
    //           {data.map((product) => (
    //               <CardProduct key={product.id} id={product.id} image={product.image} name={product.name} price={product.price} />
    //           ))}
    //       </section>
    //   </div>
  );
}
export default Home;