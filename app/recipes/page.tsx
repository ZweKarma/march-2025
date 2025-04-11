import { title } from "@/components/primitives";

export default function RecipePage() {
  return (
    <div>
      <h1 className={title()}>Recipes</h1>
      <div>
        <b>Pancakes</b>
        <img
          alt="Pancakes"
          src="https://www.allrecipes.com/thmb/FE0PiuuR0Uh06uVh1c2AsKjRGbc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_002-0e249c95678f446291ebc9408ae64c05.jpg"
        />
        <p>
          Ingridients needed: Flour, baking powder, sugar, salt, milk, and eggs.
          - 1 ½ cups all-purpose flour - 3 ½ teaspoons baking powder - 1
          tablespoon white sugar - ¼ teaspoon salt, or more to taste - 1 ¼ cups
          milk - 3 tablespoons butter, melted - 1 large egg{" "}
        </p>
        <p>
          {" "}
          Step 1 Sift flour, baking powder, sugar, and salt together in a large
          bowl. Make a well in the center and add milk, melted butter, and egg;
          mix until smooth. Step 2 Heat a lightly oiled griddle or pan over
          medium-high heat. Pour or scoop the batter onto the griddle, using
          approximately 1/4 cup for each pancake ; cook until bubbles form and
          the edges are dry, about 2 to 3 minutes. Flip and cook until browned
          on the other side. Repeat with remaining batter.{" "}
        </p>
        <b>Philly Cheese Steaks</b>
        <img
          alt="Philly Cheesesteak"
          src="https://www.budgetbytes.com/wp-content/uploads/2024/09/Philly-Cheesesteak-V1.jpeg"
        />
        <p>
          {" "}
          Ingridients needed: ½ teaspoon salt ½ teaspoon black pepper ½ teaspoon
          paprika ½ teaspoon chili powder ½ teaspoon onion powder ½ teaspoon
          garlic powder ½ teaspoon dried thyme ½ teaspoon dried marjoram ½
          teaspoon dried basil 1 pound beef sirloin, cut into thin 2 inch strips
          3 tablespoons vegetable oil 1 onion, sliced 1 green bell pepper,
          julienned 3 ounces Swiss cheese, thinly sliced 4 hoagie rolls, split
          lengthwise
        </p>
        <p>
          Step 1 Gather all ingredients. Step 2 Mix salt, pepper, paprika, chili
          powder, onion powder, garlic powder, thyme, marjoram, and basil
          together in a small bowl. Step 3 Place steak in a large bowl; sprinkle
          seasoning mixture over top and stir to coat. Step 4 Heat 1/2 of the
          oil in a skillet over medium-high heat. Add steak; cook and stir to
          the desired doneness. Transfer cooked steak to a plate. Step 5 Heat
          the remaining oil in the skillet. Add onion and green pepper; cook and
          stir until tender and caramelized. Step 6 Preheat the oven on the
          broiler setting. Divide cooked beef between the bottoms of 4 rolls.
          Step 7 Layer with onion and green pepper. Step 8 Top with sliced
          cheese. Place on a cookie sheet. Step 9 Broil in the preheated oven
          until cheese is melted. Step 10 Cover with tops of rolls and serve
        </p>
        <b>Tiramisu</b>
        <img
          alt="Tiramisu"
          src="https://tastesbetterfromscratch.com/wp-content/uploads/2017/04/Tiramisu-14.jpg"
        />
        <p>
          Ingridients: Ladyfingers: I buy them, but you could make them from
          scratch. Mascarpone: it wouldn’t be true tiramisu without mascarpone,
          but if you absolutely must, you could substitute cream cheese. Coffee:
          I use espresso Granulated Sugar Vanilla extract: or substitute
          imitation vanilla Cocoa powder: for dusting on top Heavy Whipped cream
        </p>
        <p>
          Steps: Mix creamy filling. Beat the mascarpone, cream, sugar, and
          vanilla together until stiff peaks. Dip lady fingers. Add the espresso
          and liqueur (if using) to a shallow bowl and dip the lady fingers on
          both sides (don’t let them soak–just a quick dip!) Layer mascarpone.
          Smooth a layer of the mascarpone/whipped cream mixture on top of the
          lady fingers. Repeat. Add another layer of lady fingers (dipped in
          coffee and liqueur) and another layer of cheese mixture. Dust with
          cocoa powder. Tiramisu is even better when made in advance, allowing
          the flavors to blend! It will keep in the refrigerator for 2 to 3
          days.
        </p>
      </div>
    </div>
  );
}
