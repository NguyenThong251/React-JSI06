import React from "react";
import Resgister from "../../components/user/form/Resgister";
import CardProduct from "../../components/user/ui/CardProduct";
import useCartStore from "../../store/cartStore";

function Home(){
  const loadCart = useCartStore((state) => state.loadCart);
  React.useEffect(() => {
    loadCart(); // Tải giỏ hàng khi component được mount
  }, [loadCart]);
    const data = [
        { id: 1, image: 'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8', name: 'Product 1', price: '100$' },
        { id: 2, image: 'https://plus.unsplash.com/premium_photo-1695302441138-f68978135eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', name: 'Product 2', price: '150$' },
        { id: 3, image: 'https://images.unsplash.com/photo-1725406029195-f0afc31b2f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8', name: 'Product 3', price: '200$' }
      ];
return (

<div className="">

<div className="text-5xl text-red-800 font-bold">Home</div>
<Resgister/>
<section className="grid grid-cols-3 gap-4 mt-6">
        {/* Sử dụng map() để duyệt qua mảng data và render từng sản phẩm */}
        {data.map((product) => (
          <CardProduct key={product.id} image={product.image} name={product.name} price={product.price} />
        ))}
      </section>
</div>

)

}

export default Home;