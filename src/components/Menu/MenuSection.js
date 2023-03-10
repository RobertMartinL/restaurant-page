import React from 'react';
import Item from './Item';
import './menu.css';

const MenuSection = () => {
  return (
    <>
        <h2 id='starters' className='sectionTitle'>Starters</h2>
        <div className='sectionDescription'>Start out with one of our unique and delicious apps!</div>
        <div className='menuContainer'>
            <div className='itemsContainer'>
                <Item className='itemName' name='Buffalo Shrimp or Oysters' desc='Crispy fried shrimp or oysters dusted with parmesan over buffalo sauce $13 sub oysters +$2'/>
                <Item className='itemName' name='Cheese Fries' desc='Hand cut fries, topped with cheddar & jack cheese $8.5 +bacon +$2 +bayou +$4'/>
                <Item className='itemName' name='Bayou Nachos' desc='Home fried tortilla chips with roast beef, onions, jalapeños, tomatoes, jack & cheddar cheese, topped w/ homemade ranch $13'/>
                <Item className='itemName' name="Munchin' Wings" desc='Crispy fried chicken wings served plain or tossed in buffalo or sweet and spicy asian 6pc $12 / 9pc $17'/>
                <Item className='itemName' name='Munch Bowl' desc='Herb infused grits topped with shredded cheese and slow cooked roast beef $14'/>
                <Item className='itemName' name='Sweet -n- Spicy Shrimp' desc='Fried shrimp tossed in a sweet and spicy chili sauce with sesame seeds $14'/>
                <Item className='itemName' name='Lower Garden District Fries' desc='Thick cut fries topped with cheese and crawfish and pepper cream sauce $13'/>
                <Item className='itemName' name='Salmon Bites' desc='Crispy marinated salmon slices lightly battered, served with sweet and spicy chili sauce and soy glaze dipping sauce'/>
            </div>
        </div>  
        <h2 id='entrees' className='sectionTitle'>Entrees</h2>
        <div className='sectionDescription'>Delicious dishes made from scratch and fresh to order!</div>
        <div className='menuContainer'>
            <div className='itemsContainer'>
                <Item className='itemName' name='Shrimp and Grits' desc='Large sauteed shrimp in a worcestershire reduction sauce served over herb infused stone ground grits with grilled toast $17.5'/>
                <Item className='itemName' name='Oven Roasted Salmon' desc='Salmon in a citrus butter sauce served over stone ground grits and asparagus $19'/>
                <Item className='itemName' name='Fried Pork Ribs' desc='Baby back ribs, slow cooked, then battered, fried, and tossed in sweet and spicy chili sauce. Served with fries $16.5'/>
                <Item className='itemName' name="Uncle Jo's Pasta" desc='Linguine tossed in a roasted corn cream sauce with shrimp, sausage, and fried chicken $19.5'/>
                <Item className='itemName' name='Blackened Fish' desc='Lightly blackened Louisiana fish over fried grit cakes topped with crawfish and pepper cream sauce $market'/>
            </div>
      </div>  
        <h2 id='sandwiches' className='sectionTitle'>Sandwiches</h2>
        <div className='sectionDescription'>All sandwiches are served with french fries</div>
        <div className='menuContainer'>
            <div className='itemsContainer'>
                <Item className='itemName' name='Backyard Burger' desc='Angus beef, lettuce, tomato, mayo, pickles, onions, & american $14'/>
                <Item className='itemName' name='Roast Beef Sandwich' desc="Chef Jordan's slow cooked pot roast on a french baguette, served with lettuce, tomato, pickles, and mayo $13.5"/>
                <Item className='itemName' name='Crispy or Grilled Chicken Sandwich' desc='Pepper jack cheese, red onions, tomato, lettuce, and mayo $13'/>
                <Item className='itemName' name="Hot Sausage Patty Melt" desc='Hot sausage, cheese, tomatoes, mayo, and onions pressed $13.5'/>
                <Item className='itemName' name='Shrimp or Oyster Boat' desc='Open faced baguette of shrimp with mayo, lettuce, and tomatoes $15 sub oysters +$2'/>
                <Item className='itemName' name='Clubhouse Club "Sammich"' desc='Triple decker club sandwich with ham, turkey, bacon, lettuce, tomatoes, and mayo on toast $14'/>
                <Item className='itemName' name='Shrimp Wrap' desc='Fried shrimp, lettuce, bacon, tomatoes, and ranch with buffalo dipping sauce $14'/>
                <Item className='itemName' name='Fried Fish Tacos' desc='Crispy fried Louisiana-caught fish, on grilled corn tortillas topped with jazzy slaw, cilantro, and grilled corn $12.5'/>
            </div>
        </div>  
        <h2 id='salads' className='sectionTitle'>Salads</h2>
        <div className='sectionDescription'></div>
        <div className='menuContainer'>
        <div className='itemsContainer'>
                <Item className='itemName' name='Chopped Salad' desc='Mixed greens, chopped egg, bacon, tomatoes, and croutons. Honey mustard, creole ranch, or vinagrette. Side $7 / Dinner $9.5  W/ roasted or crispy chicken $13. W/ crispy or grilled shrimp $14 oysters $16'/>
                <Item className='itemName' name='Caesar Salad' desc='Romaine, parmesan, croutons, homemade caesar dressing. Side $7 / Dinner $9.5  W/ roasted or crispy chicken $13 Crispy or grilled shrimp $14 Oysters $16'/>
                <Item className='itemName' name='Gentilly Chicken Salad' desc='Mixed greens, bacon, tomatoes, cheese, roasted corn, honey mustard, and crispy or grilled chicken $14.5'/>
                <Item className='itemName' name="Buffalo Salad" desc='Mixed greens, bacon, tomatoes, and large fried shrimp with buffalo and ranch dressing $14 sub oysters $16'/>
                <Item className='itemName' name="Aunt Irma's Hawaiian Salad" desc='Mixed greens, avocado, cilantro, cucumbers, wonton strips and grilled shrimp w/ Hawaiian vinagrette $15 sub salmon strips $18'/>
            </div>
        </div>   
        <h2 id='soups' className='sectionTitle'>Soup</h2>
        <div className='sectionDescription'>Cup $7.5 / Bowl $10</div>
        <div className='menuContainer'>
            <div className='itemsContainer'>
                <Item className='itemName' name='Gumbo' desc='Seafood, hot sausage, and andouille in a dark roux'/>
                <Item className='itemName' name='Soup De Jour' desc='Limited Availability, ask about our current Soup De Jour in house'/>
            </div>
        </div> 
        <h2 id='desserts' className='sectionTitle'>Desserts</h2>
        <div className='sectionDescription'></div>
        <div className='menuContainer'>
            <div className='itemsContainer'>
                <Item className='itemName' name='Bread Pudding' desc=''/>
                <Item className='itemName' name='Key Lime Pie' desc=''/>
            </div>
        </div>  
    </>
  )
}

export default MenuSection