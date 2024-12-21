// import Collapse from 'react-bootstrap/Collapse';
import React from "react";
import { useState } from "react";
import { Chapter, Chart, Cloud, Icon1, Icon2, Import, Key, Mobile, People, Play, Teacher, Timer2, User1, Users, Video, Video2 } from "../../../imagepath";
import { Link } from 'react-router-dom';
import FeatherIcon from "feather-icons-react";
import { useRazorpay } from "react-razorpay";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Listing from "../../../Api/Listing";
const DetailsContent = ({ item }) => {
  const { Razorpay } = useRazorpay();
  const RAZOPAY_KEY = process.env.REACT_APP_RAZOPAY_KEY;
  // console.log("RAZOPAY_KEY", process.env.REACT_APP_RAZOPAY_KEY)
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    const main = new Listing();
    const record = new FormData();
    record.append("amount", item?.discountPrice);
    record.append("currency", "INR");
    record.append("receipt", "aa");
    main.PaymentAdd(record)
      .then((res) => {
        if (res && res.data && res.data.orderId) {
          const options = {
            key: RAZOPAY_KEY,
            amount: item?.discountPrice,
            currency: "INR",
            name: "Your Company Name",
            description: "Payment for services",
            order_id: res.data.orderId,
            handler: function (response) {
              toast.success("Payment Successful");
              localStorage.setItem("response", JSON.stringify(response));
              savePaymentDetails(
                response.razorpay_order_id,
                response.razorpay_payment_id,
                "success"
              );
              navigate(`/success/${response.razorpay_payment_id}`);
            },
            prefill: {
              name: "Customer Name",
              email: "customer@example.com",
              contact: "1234567890",
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#F37254",
            },
          };
  
          const rzp = new Razorpay(options);
          rzp.on("payment.failed", function (response) {
            const error = response.error;
            const orderId = error?.metadata?.order_id;
            const paymentId = error?.metadata?.payment_id;
  
            if (orderId && paymentId) {
              savePaymentDetails(orderId, paymentId, "failed");
              navigate(`/cancel/${paymentId}`);
            } else {
              console.error("Failed to retrieve Razorpay order or payment ID");
            }
          });
          rzp.open();
        } else {
          toast.error(res.data.message || "Failed to create order");
        }
      })
      .catch((error) => {
        toast.error("Error creating order");
        console.error("Order creation error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  

  const savePaymentDetails = async (orderId, paymentId, payment_status) => {
    setLoading(true);
    try {
      const main = new Listing();
      const formdata = new FormData();
      formdata.append("order_id", orderId);
      formdata.append("payment_id", paymentId);
      formdata.append("amount", item?.discountPrice);
      formdata.append("currency", "INR");
      formdata.append("payment_status", payment_status); // Include payment status
      const response = await main.PaymentSave(formdata);

      if (response?.data?.status) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    
    </>
  );
};



DetailsContent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default DetailsContent;
