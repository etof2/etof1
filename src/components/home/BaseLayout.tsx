const BaseLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* header */}
      <div className="h-16 fixed top-0 w-screen border-b-4 mx-auto border-pink-600">
        <div className="flex justify-between pt-5">
          {/* proflie */}
          <div className="">proflie</div>
          {/* logo */}
          <div className="">logo</div>
          {/* recharge */}
          <div className="">recharge</div>
        </div>
      </div>
      {/* content */}
      <div className=" bg-white"></div>
      {/* navigation */}
      <div className="h-16 fixed bottom-0 bg-pink-600 w-screen">hola</div>
    </div>
  );
};

export default BaseLayout;
