import React from "react";
import { useAddress,useDisconnect,useMetamask } from "@thirdweb-dev/react";
function NFTDropPage() {

  //auth
  const connectWithMetamask =useMetamask();
  const address =useAddress();
  const disconnect=useDisconnect();
  
  console.log(address);

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/*Left*/}

      <div className="lg:col-span-4 bg-gradient-to-bl  from-red-400 to-purple-300">
        <div
          className="flex flex-col items-center justify-center
    py-2 lg:min-h-screen"
        >
          <div className=" rounded-xl bg-gradient-to-br from-yellow-400 to-purple-400 p-1">
            <img
              className="w-44 rounded-xl object-cover lg:h-80 lg:w-64"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HqsxMd7L5dzeAGJH0zClDdLFhcbromydSw&usqp=CAU"
              alt=""
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-yellow-50">SAGOBULL Ape</h1>
            <h2 className="text-xl text-gray-300">
              My First SAGOBULL collection is here
            </h2>
          </div>
        </div>
        </div>
        {/*Right*/}
        <div className='flex-1 flex-col p-12 lg:col-span-6'>
          {/*Header*/}
          <header className='flex items-center justify-between'>
            <h1 className="w-52 cursor-pointer text-xl font-extralight 
            sm:w-80">The
            <span className="font-extrabold text-black "  style={{ textDecoration: 'underline', color: '#f095dc' }}> SAGOBULL </span>
              nft market place</h1>
              <button onClick={()=>address?  disconnect(): connectWithMetamask()} className='rounded-full bg-pink-400 text-white px-4 py-2
            text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>{address?'Sign Out': 'Sign in'}
            </button>
          </header>
          <hr className='my-2 border'></hr>
          {address&&(
            <p className='text-center text-sm text-red-400'>
              you are logged in with wallet {address.substring(0,6)}....
              {address.substring(address.length-5)}
            </p>
          )}
          {/*content*/}
          <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center
          lg:space-y-0 lg:justify-center ">

            <img  className='w-80 object-cover  lg:mb-10 lg:mt-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUHImpzuUnuVcejhMEkRbYpqjpsQxtcil0g&usqp=CAU" 
            alt=""/>
           <h1 className='text-3xl font-bold lg:text-5xl'>
            The SAGOBULL nft club | NFT Drop
           </h1>
           <p className='pt-2 text-xl text-green-400  '>
            02/40 NFT's claimed
           </p>
          </div>
          {/*mint button*/}
        <button className='h-16 w-full bg-red-500 text-white rounded-full  mt-10  font-bold lg:mt-10'>
          Mint NFT (0.02 ETH)
        </button>
      </div>
    </div>
  );
}

export default NFTDropPage;
