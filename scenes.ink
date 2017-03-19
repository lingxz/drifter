VAR knows_name = false
VAR mum_suspicious = false
VAR knows_gf = false
VAR took_gf_photo = false
VAR doctor_name = "Williams"
~ temp explore_counts = 0
~ temp first_explore = true


=== schoolboy_room ===
It looks like a normal schoolboy's room. There is a stack of books on the table, and a name tag on the table. In the corner of the room, there is a wardrobe with a mirror. -> explore_room.start


=== explore_room ===

= start
+ [Go towards the table.] I walk towards the table. The first book on the stack says Chemistry. An A-level chemistry textbook. The nametag lay on its side. 
    -> explore_room.table
+ [Go to the wardrobe.] I walk towards the wardrobe. -> explore_room.wardrobe


= wardrobe
I look at the mirror. Well, this dude is pretty good looking, at least I've got that going for me. 
* {explore_counts > 2 and not first_explore } I have taken too long. -> explore_room.need_to_go
* {explore_counts <= 2 or first_explore} [Open the wardrobe.] I open the wardrobe. This guy obviously likes black. 
    ~ explore_counts += 1
    ** {first_explore} -> explore_room.mum_calls
    ** Look around to see if there's anything going on. 


= table
    + {explore_counts <= 2 or first_explore } [Look at the name tag.] I look at the name tag. 
        ~ explore_counts += 1
        It says {name}. 
        ~ knows_name = true
        ++ {first_explore} -> explore_room.mum_calls
        ++ {not first_explore} [Go back.] -> explore_room.table
    + {explore_counts <= 2 or first_explore } [Check out the books.] I briefly flip through the books. Something catches my eye. 
        ~ explore_counts += 1
        ++ {first_explore} -> explore_room.mum_calls
        ++ {not first_explore}What's that? -> girlfriend_photo
        ++ {not first_explore } Never mind. 
            +++ [Go back.] -> explore_room.table
    + {explore_counts > 2 and not first_explore } I have taken too long. -> explore_room.need_to_go

= mum_calls
"Hey, {name}, it's time for school!" A voice calls, and middle aged woman steps into the room. 
~ first_explore = false
// reset explore counts
~ explore_counts = 0

* { knows_name } "Coming!" [] I shout back.
    I have a few more minutes to explore.
    -> explore_room.start
    
* { not knows_name } "Who's {name}?"[] I say, confused. 
    ~ mum_suspicious = true
    "Are you okay?" She seems concerned. 
    ** Uh oh. {name} is probably the name of this body.
    - She stretches out her hand and touches my forehead. 
    "Oh dear, you're having a fever! Do you want to go to the doctor?"
    ** "No, it's fine, I'll just rest at home." 
    ** "Yes, I think I need a doctor." -> go_to_doctor

= need_to_go
// has taken too long, needs to go
* It's about time to go out. {name}'s mother is waiting. -> before_going_outside

=== girlfriend_photo ===
~ knows_gf = true
* {girlfriend_photo == 1} -> first_time
* {girlfriend_photo > 1} -> subsequent_times
= first_time
It's a photo of a girl. There is a heart written at the back. {name}'s girlfriend?
* {girlfriend_photo == 1}[Take it with me. ] I carefully pick up the photo and put it in my pocket. 
    ~ took_gf_photo = true
    ++ [Go back.] -> explore_room.table
* {girlfriend_photo == 1} [Leave it there. It's not good to take things without permission.] I put the photo back. 
    ++ [Go back.] -> explore_room.table

= subsequent_times
There's nothing new here.
* {not took_gf_photo} [The photo of {name}'s girlfriend is still here. Take it with me?] I decide to take the photo. 
+ [Go back] -> explore_room.table


=== before_going_outside ===
I go outside. The mother busies herself around me. 

"Oh dear, you look feverish," she suddenly exclaims. "Do you need to go to the doctor?"
* "No, I'm fine."
* ["Yes, I think I'm sick."] "Yes, I think I'm sick," I reply. Maybe the doctor would be able to tell me what is going on. -> go_to_doctor


=== go_to_doctor ===
She drives me to the doctor. 

He looks oddly familiar. 

"How has he been recently?" he asks.

* I thought I saw something dangerous in his eyes when he spoke.  
- 

{mum_suspicious: 
   "Oh, I don't know, Dr {doctor_name}. He was acting strange just this morning. That's why I was worried."
    ** The look on his face darkens. 
        "Sure, I just need to do some checkups on him to make sure he's fine. In the meantime, would you mind waiting outside?"
        Something does not feel right.
        "Sure," she happily obliged.
        
        *** The door closes behind her. -> killed_by_doctor_ending
}
    

* {not mum_suspicious. } "Oh, he's excellent, Dr {doctor_name}. I just thought he looked feverish this morning," the mother replied, looking slightly worried. 
    I look again. The dangerous look is gone. 
    Maybe it was just an illusion. 
























