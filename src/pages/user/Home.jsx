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
import UserFooter from "../../components/user/UserFooter";
import { useCategories } from "../../hook/useCategory";
// import { Carousel } from '@mantine/carousel';
function Home(){
  // const data = [
  //     { id: 1, image: 'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8', name: 'Product 1', price: '100$' },
  //     { id: 2, image: 'https://plus.unsplash.com/premium_photo-1695302441138-f68978135eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', name: 'Product 2', price: '150$' },
  //     { id: 3, image: 'https://images.unsplash.com/photo-1725406029195-f0afc31b2f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8', name: 'Product 3', price: '200$' }
  // ];
  // const [opened, { open, close, toggle }] = useDisclosure(false);
  const { products, loading } = useProducts();
  const { categories } = useCategories();
  return (
<>
<div className="flex flex-col gap-10">
  <section>
  <Carousel
        withIndicators
        height={400} // Chiều cao slider
        slideSize="100%" // Mỗi lần hiển thị 1 slide
        slideGap="md" // Khoảng cách giữa các slide
        loop
        align="center" // Căn giữa các slide
      >
        {/* Slide 1 */}
        <Carousel.Slide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQuNGIGmj7Vm_9KrUo-QkyHxinlc1AVkMgTA&s"
            alt="Fashion 1"
            className="rounded-lg shadow-md object-cover w-full h-full"
          />
        </Carousel.Slide>

        {/* Slide 2 */}
        <Carousel.Slide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST55GP6lBrbJ5Jl_EhUPLmhvP_LsXfk1WIdw&s"
            alt="Fashion 2"
            className="rounded-lg shadow-md object-cover w-full h-full"
          />
        </Carousel.Slide>

        {/* Slide 3 */}
        <Carousel.Slide>
          <img
            src="data:image/jpeg;base64,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"
            alt="Fashion 3"
            className="rounded-lg shadow-md object-cover w-full h-full"
          />
        </Carousel.Slide>

        {/* Slide 4 */}
        <Carousel.Slide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZda4rFdxWWBxM9E6BUy0bz5FbRW4Ajrm0Mg&s"
            alt="Fashion 4"
            className="rounded-lg shadow-md object-cover w-full h-full"
          />
        </Carousel.Slide>
      </Carousel>
  </section>
    <section>
        <div className="my-16 flex justify-center">
            <h3 className="font-bold text-3xl">Shop By Category</h3>
        </div>
        <div className="grid grid-cols-1 px-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CardCategory
            key={category.id}
            image={category.image}
            title={category.title}
            quantity={category.quantity}
          />
        ))}
      </div>
    </section>

        <Hero/>
        <section>
          <h2 className="flex items-center justify-center my-9 text-2xl font-bold" >Hot trend</h2>
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
        <div className="mt-10">

        
        </div>
        {/* <div className="">123</div> */}
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