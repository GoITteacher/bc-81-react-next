import EventProposalForm from "./Forms/EventProposalForm";
import GadgetRepairForm from "./Forms/GadgetRepairForm";
import ProductListingForm from "./Forms/ProductListingForm";
import SupportTicketForm from "./Forms/SupportTicketForm";
import TravelQuoteForm from "./Forms/TravelQuoteForm";
import WorkshopForm from "./Forms/WorkshopForm";
import OrderForm from "./OrderForm";

export default function App() {
  return (
    <>
      <OrderForm />
      <hr />
      <EventProposalForm />
      <hr />

      <GadgetRepairForm />
      <hr />

      <ProductListingForm />
      <hr />

      <SupportTicketForm />
      <hr />

      <TravelQuoteForm />
      <hr />

      <WorkshopForm />
    </>
  );
}
