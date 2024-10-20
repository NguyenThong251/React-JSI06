import React from "react";
import Resgister from "../../components/user/form/Resgister";
import CardProduct from "../../components/user/ui/CardProduct";
import useCartStore from "../../store/cartStore";
import { Burger, Button, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CardCategory from "../../components/user/card/CardCategory";
import Hero from "../../components/user/Hero";

function Home(){
  const data = [
      { id: 1, image: 'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8', name: 'Product 1', price: '100$' },
      { id: 2, image: 'https://plus.unsplash.com/premium_photo-1695302441138-f68978135eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', name: 'Product 2', price: '150$' },
      { id: 3, image: 'https://images.unsplash.com/photo-1725406029195-f0afc31b2f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8', name: 'Product 3', price: '200$' }
  ];
  const [opened, { open, close, toggle }] = useDisclosure(false);
  return (
<>
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

        </div>
    </section>

        <Hero/>
        <div className="grid grid-cols-4 px-20">
        <div className="card">
            <div className="bg-orange-200 relative overflow-hidden">
                <img src="https://pettie.wpengine.com/wp-content/uploads/2023/05/shop-1-1000x1000.webp" alt="" />
                <div className="absolute bottom-10 left-1/2 translate-y-0">

                <Button color="red" className="">123</Button>
                </div>
            </div>
        </div>
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