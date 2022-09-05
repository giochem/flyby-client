import { useMutation } from "@apollo/client";
import { DELETE_ORDER } from "../../../../queries";

export default function Delete({ id, setActiveOrder }: { id: string; setActiveOrder: Function }) {
  const [deleteOrder, { loading, error, data }] = useMutation(DELETE_ORDER);
  const handleDeleteOrder = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    deleteOrder({ variables: { deleteOrderId: id } });
  };
  if (error) {
    console.log(JSON.stringify(error));
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (data) {
    setActiveOrder(false);
    window.location.reload();
  }
  return <div onClick={handleDeleteOrder}>Unsubscribe</div>;
}
