import React,{useState} from 'react'
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import "./style.css"
let categories=[{
    id:1,title:"Beauty & SPAs",
    subcategories:[
   {    title:" Face & Skin Care"},
    {   title:"Message"},
     {  title:"Salons"},
    {   title:"Cosmetic Procedures"},  
    {   title:"Hair Removal"},   
    {   title:"Brows & Lashes"},  
     {  title:"Hair & Styling"}, 
     {  title:"Spas"},  
    {   title:"Nail Salons"},   
    {   title:"Makeup"},   
   {    title:"Blowouts & Styling"},   
   {    title:"Tanning"},  
    ]
}
    ,{id:1,title:"Travel",
    subcategories:[
        {    title:" Face & Skin Care"},
         {   title:"Message"},
        
         {   title:"Brows & Lashes"},  
       
        {    title:"Tanning"},  
         ]
},{id:1,title:"Food",
subcategories:[
    {    title:" Face & Skin Care"},
     {   title:"Message"},
 
     {   title:"Nail Salons"},   
     {   title:"Makeup"},   
    {    title:"Blowouts & Styling"},   
    {    title:"Tanning"},  
     ]
}]

const CategoriesMenu = ({showCategories}) => {
    const [activeCategory, setactiveCategory] = useState(categories[0])


   

  return (
    <Popper id={'show-categories'} open={showCategories}    placement={"bottom-start"}  transition>
    {({ TransitionProps }) => (
      <Fade {...TransitionProps} timeout={350}>
        <Box sx={{ border: "1px solid #d8d8d8", display:"flex", flexDirection:"row", marginTop:11, marginLeft:23.5,  p: 1, bgcolor: 'background.paper' }}>
            <div>
                {categories.map((item,index)=> (
                    <div onClick={()=>setactiveCategory(item)} className='link-item' key={index}>{item.title}</div>
                ))}
            </div>
            <div className="sub-menu">

            {activeCategory.subcategories.map((item,index)=> (
                    <span className='link-item'  key={index}>{item.title}</span>
                ))}      
            </div>
        </Box>
      </Fade>
    )}
  </Popper>
  )
}

export default CategoriesMenu