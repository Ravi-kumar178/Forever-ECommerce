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
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
     
      {/* filter option */}
       <div className='min-w-60'>
          <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 '>FILTER
            <img src={assets.dropdown_icon} alt='' loading='lazy' className={`h-3 sm:hidden ${showFilter?"rotate-90":""}`}/>
          </p>

          {/* category filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?"":"hidden"} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                  <input onChange={toggleCategory} type="checkbox" value={"Men"} className='w-3' /> Men
                </p>
                <p className='flex gap-2'>
                  <input onChange={toggleCategory} type="checkbox" value={"Women"} className='w-3' /> Women
                </p>
                <p className='flex gap-2'>
                  <input onChange={toggleCategory} type="checkbox" value={"Kids"} className='w-3' /> Kids
                </p>
            </div>
          </div>

          {/*Sub category filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?"":"hidden"} sm:block`}>
            <p className='mb-3 text-sm font-medium'>SUB-CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                  <input onChange={toggleSubCategory} type="checkbox" value={"Topwear"} className='w-3' /> Topwear
                </p>
                <p className='flex gap-2'>
                  <input onChange={toggleSubCategory}  type="checkbox" value={"Bottomwear"} className='w-3' /> Bottomwear
                </p>
                <p className='flex gap-2'>
                  <input onChange={toggleSubCategory}  type="checkbox" value={"Winterwear"} className='w-3' />Winterwear
                </p>
            </div>
          </div>
       </div>

       {/* right side */}
       <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
              <Title text1={"ALL"} text2={"COLLECTIONS"}/>

              {/* product sort */}
              <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                <option value="relevant">SORT by: Relevant</option>
                <option value="low-high">SORT by: Low to High</option>
                <option value="high-low">SORT by: High to Low</option>
              </select>
          </div>

          {/* map products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filteredProducts.length>0 && (
                filteredProducts.map((product,index)=>(
                   <ProductItem key={index} id={product._id} name={product.name} price={product.price} image={product.image}/>
                ))
              )
            }
          </div>
       </div>
    </div>
  )
}

export default Collection