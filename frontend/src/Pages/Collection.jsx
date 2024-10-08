import React, { useCallback, useContext, useEffect, useState } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { assets } from '../assets/assets';
import Title from "../Components/Common/Title"
import ProductItem from "../Components/Common/ProductItem"

const Collection = () => {

  const {products,search , showSearch} = useContext(ShopContext);
  const[showFilter, setShowFilter] = useState(false);
  const[filteredProducts, setFilteredProducts] = useState([]);
  const[category, setCategory] = useState([]);
  const[subCategory, setSubCategory] = useState([]);
  const[sortType, setSortType] = useState('relevant');

  

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else{
      setCategory(prev => [...prev,e.target.value]);
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value]);
    }
  }

  const applyFilter = useCallback(()=>{

    let productCopy = products.slice();
    if(category.length>0){
      productCopy = productCopy.filter(product => category.includes(product.category));
    }

    if(subCategory.length>0){
      productCopy = productCopy.filter(product => subCategory.includes(product.subCategory))
    }

    if(showSearch && search){
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    setFilteredProducts(productCopy);
  },[category,subCategory,search,showSearch]);


  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch,products])

  const sortProduct = ()=>{

    let fpCopy = filteredProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilteredProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;

      case 'high-low':
        setFilteredProducts(fpCopy.sort((a,b)=>(b.price-a.price))) ;
        break;
        
      default:
        applyFilter();
        break;  
    }
  };

  useEffect(()=>{
    sortProduct();
  },[sortType])


/*   useEffect(()=>{
    setFilteredProducts(products);
  },[])
 */
  return (
    <div className='px-8 flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
     
      {/* filter option */}
       <div className='min-w-60'>
          <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 bg-gradient-to-r from-[#A6142F] via-[#FF512F] to-[#F09819]  text-transparent bg-clip-text'>FILTER
            <img src={assets.dropdown_icon} alt='' loading='lazy' className={`h-3 sm:hidden ${showFilter?"rotate-90":""}`}/>
          </p>

          {/* category filter */}
          <div className={`border border-gray-700 pl-5 py-3 mt-6 ${showFilter?"":"hidden"} sm:block shadow-[10px_5px_50px_-5px] gradient`}>
            <p className='mb-3 text-sm font-medium text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-blue-50 bg-clip-text'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-normal text-gray-100'>
                <p className='flex gap-2 items-center '>
                  <input onChange={toggleCategory} type="checkbox" value={"Men"} className='w-3 h-3 cursor-pointer appearance-none bg-gray-600 border-gray-800 rounded-sm appearance checked:bg-gray-100 checked:border-blue-500' /> Men
                </p>
                <p className='flex gap-2 items-center'>
                  <input onChange={toggleCategory} type="checkbox" value={"Women"} className='w-3 h-3 cursor-pointer appearance-none bg-gray-600 border-gray-800 rounded-sm appearance checked:bg-gray-100 checked:border-blue-500' /> Women
                </p>
                <p className='flex gap-2 items-center'>
                  <input onChange={toggleCategory} type="checkbox" value={"Kids"} className='w-3 h-3 cursor-pointer appearance-none bg-gray-600 border-gray-800 rounded-sm appearance checked:bg-gray-100 checked:border-blue-500' /> Kids
                </p>
            </div>
          </div>

          {/*Sub category filter */}
          <div className={`border border-gray-700 pl-5 py-3 mt-6 ${showFilter?"":"hidden"} sm:block gradient shadow-[10px_5px_50px_-5px]`}>
            <p className='mb-3 text-sm font-medium text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-blue-50 bg-clip-text'>SUB-CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-normal text-gray-100'>
                <p className='flex gap-2 items-center'>
                  <input onChange={toggleSubCategory} type="checkbox" value={"Topwear"} className='w-3 h-3 cursor-pointer appearance-none bg-gray-600 border-gray-800 rounded-sm appearance checked:bg-gray-100 checked:border-blue-500' /> Topwear
                </p>
                <p className='flex gap-2 items-center'>
                  <input onChange={toggleSubCategory}  type="checkbox" value={"Bottomwear"} className='w-3 h-3 cursor-pointer appearance-none bg-gray-600 border-gray-800 rounded-sm appearance checked:bg-gray-100 checked:border-blue-500' /> Bottomwear
                </p>
                <p className='flex gap-2 items-center'>
                  <input onChange={toggleSubCategory}  type="checkbox" value={"Winterwear"} className='w-3 h-3 cursor-pointer appearance-none bg-gray-600 border-gray-800 rounded-sm appearance checked:bg-gray-100 checked:border-blue-500' />Winterwear
                </p>
            </div>
          </div>
       </div>

       {/* right side */}
       <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
              <Title text1={"ALL"} text2={"COLLECTIONS"}/>

              {/* product sort */}
              <select onChange={(e)=>setSortType(e.target.value)} className='border rounded-md text-gray-100 border-gray-800 bg-gray-600 text-sm px-2'>
                <option value="relevant"className='text-blue-500 '>SORT by: Relevant</option>
                <option value="low-high" className='text-blue-500'>SORT by: Low to High</option>
                <option value="high-low" className='text-blue-500'>SORT by: High to Low</option>
              </select>
          </div>

          {/* map products */}
          <div className='grid grid-cols-2 md:grid-cols-3  gap-4 gap-y-6'>
            {
              filteredProducts.length>0 && (
                filteredProducts.map((product,index)=>{
                  let description = product.description.slice(0,100);
                  return(
                    <ProductItem key={index} id={product._id} name={product.name} price={product.price} image={product.image} description={description} subCategory={product.subCategory}/>
                  )
                })
              )
            }
          </div>
       </div>
    </div>
  )
}

export default Collection