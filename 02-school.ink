VAR gf_faith = 2
VAR gf_faith_threshold = 2
VAR correct_answer = false
VAR teacher_suspicious = false

=== school ===
= start
I don't know where to go. So I follow the crowd. 

Suddenly, someone pats me on the back. I turn around. 

A girl is standing there, looking slightly nervous. 

{knows_gf:
    * I remember her. [] She's the girl in the photo. {name}'s girlfriend. 
    -> talk_to_gf.start(knows_gf)
- else:
    Who is she? I don't know her.
    -> talk_to_gf.start(knows_gf)
}

=== talk_to_gf ===
=start(knows)
{knows:
    Somehow, she makes me think of lilies in the sun. 
    I don't know what to say. What does {name} usually say to his girlfriend?
    * [Keep quiet.] I keep quiet. The more I talk, the more mistakes I make. 
        ~ gf_faith -= 2
        "Still angry over what happened yesterday?" she laughs. "Come on, don't be so sulky. How ready are you for the test today?" -> talk_to_gf.enjoyable_convo
    * "Er...hi[."]," I say nervously, as I pull up a smile. 
        "Knew you wouldn't bear grudges," she broke into a smile. "How ready are you for the test today?"
        -> talk_to_gf.enjoyable_convo
    
-else: 
    * "Who are you?" []I ask. The words come out of my mouth harsher than I expected. 
        She narrows her eyes. "You're still angry?" she seems to be considering her choices, then settled on one, "Let's talk when you're no longer so angsty and snappy then."
        With that, she walks away. 
        ** I shrugged and walked on.
        There is a test, I gather from the people around me. 
        -> test
    * [Ignore her] I ignore her and walk on. 
        From the corner of my eye, I see her freeze for a moment, then she shrugs, and walks off. 
        Did I make a mistake?
        I wonder for a moment, then shrugged and walked on. 
        There is a test, I gather from the people around me. 
        -> test
}

= enjoyable_convo
    * "Very[."]," I say confidently.
        "Always so confident, huh?" she says as she holds my hand. 
        Her hands are soft and warm. 
        ~ gf_faith += 1
    * "Quite[."]," I say tentatively. 
        She shoots me a surprised look. "Never heard you say that before, {name}. You're always excessively confident."
        I shrug. I hope I am not behaving too strangely. 
        "Don't worry," she squeezes my hand reassuringly. 
        Her hands are soft and warm. 
    * "What test?" []I ask, surprised. 
        "The chemistry test today, of course," she laughs. "Don't tell me you forgot about it completely?"
        ~ gf_faith -= 1
        ** "Of course not!" I protest. 
        She raises her eyebrows. 
        I hope I am not behaving too strangely. 
    - -> fall_in_love.start


=== test ===
* It is a chemistry multiple choice test. 
- 
{ seen_doctor: 
    The invigilator looks familiar. Isn't he Dr Williams from the clinic? What is he doing here?
- else:
    The invigilator has a stern look, and keeps looking in my direction.  
}

{fall_in_love.start:
    My heart is still thumping heavily from what happened just now. 
}

There are 5 questions. 

What should I fill in as the answers? 
~ temp x = RANDOM(1, 5)
* {x == 1}[Answers: {answer1}, {answer2}, {answer3}, {answer4}, {answer5}]
    -> correct_answer
* [Answers: {get_random_answer()}, {get_random_answer()}, {get_random_answer()}, {get_random_answer()}, {get_random_answer()}]
    -> test.wrong_answer
* {x == 2}[Answers: {answer1}, {answer2}, {answer3}, {answer4}, {answer5}]
    -> test.correct_answer
* [Answers: {get_random_answer()}, {get_random_answer()}, {get_random_answer()}, {get_random_answer()}, {get_random_answer()}]
    -> test.wrong_answer
* {x == 3}[Answers: {answer1}, {answer2}, {answer3}, {answer4}, {answer5}]
    -> test.correct_answer
* [Answers: {get_random_answer()}, {get_random_answer()}, {get_random_answer()}, {get_random_answer()}, {get_random_answer()}]
    -> test.wrong_answer
* {x == 4}[Answers: {answer1}, {answer2}, {answer3}, {answer4}, {answer5}]
    -> test.correct_answer
* [Answers: {get_random_answer()}, {get_random_answer()}, {get_random_answer()}, {get_random_answer()}, {get_random_answer()}]
    -> test.wrong_answer
* {x == 5}[Answers: {answer1}, {answer2}, {answer3}, {answer4}, {answer5}]
    -> test.correct_answer

    
= correct_answer
I shade the ovals quickly, confident that I have the right answer. 
The invigilator walks over when he is collecting papers, and sudenly asks, "Are you cheating?"
* "What? No." 
{has_cheatsheet:
    He grabs a piece of paper from my pocket, and glares at me. 
    "What's this?"
    Uh oh. It's the piece of paper from {name}'s jacket. 
    He looks at me sternly. "Come with me to my office."
    I have no choice but to follow him to his office. -> test.office
- else:
    "Sorry, I thought I saw something from the corner of my eye," he apologizes, before walking away. 
    ~ teacher_suspicious = false
    I leave the classroom, not sure where to go next.
    -> test_end
}

* "Oops, I'm caught." Honesty is the best policy. 
He looks surprised that I admitted it so easily. After collecting papers, he brings me to his office. -> test.office

= wrong_answer
I shade the ovals tenatively, not sure if I made the right choice.
- The invigilator walks over when he is collecting papers, and suddenly asks, "Are you cheating?"
* "What? No."
{has_cheatsheet:
    He grabs a piece of paper from my pocket, and glares at me. 
    "What's this?"
    Uh oh. It's the piece of paper from {name}'s jacket. 
    He looks at me sternly. "Come with me to my office."
    I have no choice but to follow him to his office. -> test.office
- else:
    He looks at me for a bit, but could not find anything suspicious. After brief pause, he walked away. 
    ~ teacher_suspicious = true
    I leave the classroom, not sure where to go next.
    -> test_end
}
* "Oops, I'm caught." Honesty is the best policy. 
He looks surprised that I admitted it so easily. After collecting papers, he brings me to his office. -> test.office

= office
He signals I drink a cup of tea while he thinks of what to do with me.
* [Drink it.] -> stuck_in_body_ending
* [Refuse.] I refuse to take the drink. There is something fishy going on.
He gets angry, and he tries to force me. 
{power_activated:
    But I am too strong for him. The strange power from previously comes flooding back. I knock him unconscious and escape. 
    -> test.test_end
- else:
    I am powerless against him. I have no choice. 
    -> stuck_in_body_ending
}

= test_end
As I was walking aimlessly, someone stuck a piece of paper in my pocket. I turn around, but the person is gone. 

It says...
GO TO THE LIBRARY, LOOK FOR {isbn}.

It is written with a {writing_instrument}, over and over again. 

* Library? Why do I need to go to the library? 

- I decide to follow the note and check it out ayway. 
-> library.entrance

=== fall_in_love ===

= start
* Suddenly, someone stops us in our tracks. 

- A big burly man. 

{seen_doctor: 
    The look on his face reminds me of Dr Williams. 
}

He has his eyes locked on me. 

* Why does he look so familiar? 

"Finally found you," he smiled.

I can't remember. My head hurts. 

Suddenly I see flashes of images. 

Clouds. A worried face. The library. A hideous reptile. A map. 

"I need to confirm it's you," the man says, as he casually fiddle with something in his pocket. "Wouldn't do to just kill off innocent humans, would it?"

"What are you talking about?" {gf_name} steps in front of me, glaring at the stranger. 

"Haven't you realized, little girl? He is not your boyfriend. He is someone else. In your boyfriend's body."

{gf_faith >= gf_faith_threshold:
    {gf_name} ignored him.
    He narrows his eyes dangerously.
    "Step aside."
    * I can see she is shaking. But she does not step back. 
    Who was it who said that courage is not the absence of fear, but the triumph over it?
    -> fall_in_love.activate_powers
}
{gf_faith >= 0 and gf_faith < gf_faith_threshold:
    She turns around to look at me questioningly. 
    * "He's spouting nonsense[."]," I shake my head. 
    "Prove it."
    {took_gf_photo:
        * [I remember the photo I took from {name}'s table. Maybe that could help?] I took out the photo from my pocket. 
        "I still carry this around, {gf_name}," I speak with the most ernest voice I could find. "I still remember when we took this photo, have you already forgotten?"
        She hugs me. 
        "I believe you. I'm sorry for ever doubting." 
            -> fall_in_love.activate_powers
        * "Hey, he's the one making a positive claim, he should bear the burden of proof[."]," I protest. 
            She laughs, "That sounds exactly like what you would say."
            A piece of paper falls from my pocket. 
            It's the photo of her that I took from {name}'s table. 
            She picks the photo up, looks at it, and suddenly hugs me.
            "I believe you. I'm sorry for ever doubting." 
            -> fall_in_love.activate_powers
    -else:
        * "Hey, he's the one making a positive claim, he should bear the burden of proof[."]," I protest.
            She looks at me with a quizzical look. She does not believe me.
            I can't prove something that isn't true. 
            The man smiled, "She wouldn't remember a thing."
            -> burly_man_ending
        * "I can't[."]," I shake my head in defeat.
            She looks at me and takes a step back. 
            I can't prove something that isn't true. 
            The man smiled, "She wouldn't remember a thing."
            -> burly_man_ending
    }
}
{gf_faith < 0:
    She looks at me and takes a step back. 
    * I shake my head, and try to explain. 
    "You've been acting unlike yourself since this morning," she looks at me, as if looking at a stranger.
    I couldn't speak. 
    The man smiled, "She wouldn't remember a thing."
    -> burly_man_ending
}

= activate_powers
~ power_activated = true
I move forward. 

* I suddenly feel a rush of power. 

- His face turned from arrogance to fear. He took out a gun. 

I don't know how I did it. There was a flash of light, my hands moved in the air, tracing out a complicated symbol, and the next moment, the burly man was gone. 

His clothes remain, and there is powder on the ground. 

- {gf_name} got up from the ground.

"What happened?" she rubbed her eyes. 

She doesn't remember anything. 

* "Oh, we're going to be late for the test[."]," I show her the time.

- She jumps to her feet, grabs my hand and starts running, "Quick, let's go!"

I hold her hand back tightly. 

I never want to let her go. 

-> test

























