import { useMutation } from "@apollo/client";
import { CREATE_ORDER } from "../../../../queries";

export default function Create({ id, setActiveOrder }: { id: string; setActiveOrder: Function }) {
  const [createOrder, { loading, error, data }] = useMutation(CREATE_ORDER);

  const handleCreateOrder = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    createOrder({ variables: { order: { tourId: id } } });
  };
  if (error) {
    console.log(JSON.stringify(error));
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (data) {
    setActiveOrder(true);
    window.location.reload();
  }
  return <div onClick={handleCreateOrder}>Subscribe</div>;
}
