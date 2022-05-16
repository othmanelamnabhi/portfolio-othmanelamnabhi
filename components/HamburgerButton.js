function HamburgerButton() {
  return (
    <>
      <div className='w-12 h-12 dark:bg-custom-dark-3-days-ecchymose bg-custom-light-dodger-blue rounded-full flex flex-col justify-evenly items-center py-[7px]'>
        <div className='w-3 h-1 bg-custom-dark-off-by-one rounded-xl'></div>
        <div className='w-6 h-1 bg-custom-dark-off-by-one rounded-xl'></div>
        <div className='w-3 h-1 bg-custom-dark-off-by-one rounded-xl'></div>
      </div>
    </>
  );
}

export default HamburgerButton;
