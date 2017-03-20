=== back_in_time ===
= start
~ universe = set_universe()
{universe == "fake":
	alternative_writing_instrument = get_writing_instrument_alternative()
	alternative_hat_color = get_alternate_color()
}

I wake up, as if from a long nap. 

Was that a dream?

I need to write the note. 

I write with...
~ temp x = RANDOM(1, 2)
+ {x == 1} a {writing_instrument}
+ a {alternative_writing_instrument}
	~ mistakes += 1
+ {x == 2} a {writing_instrument}

- Grabbing a piece of paper from my bag, I write the numbers:

{isbn}.

{mistakes >= mistakes_threshold:
	Right after I write the numbers, the world starts swirling around me. 
	-> back_in_time.mess_up
}

Where should I go now?

+ [Go to the staff room area.] 
	I walk over to the staff rooms. 
	-> back_in_time.staffroom
+ [Go to the classrooms.] 
	I walk over to the classrooms. 
	-> back_in_time.classroom

= staffroom
The staffroom corridor is empty. 
{test.office:
	Suddenly, a student walks out. I recognize him as {name}. 
	{universe == "original":
		{wearing_hat:
			He is wearing a {hat_color} hat. 
		- else:
			He is not wearing a hat. 
		}
	- else:
		{wearing_hat:
			~ temp hatx = RANDOM(1, 2)
			{hatx == 1:
				He is wearing a {alternative_hat_color} hat. 
			- else:
				He is not wearing a hat. 
			}
		- else:
			He is wearing a {alternative_hat_color} hat.
		}
	}
	+ [Run and put the piece of paper in his pocket.] 
		{universe == "original":
			-> back_in_time.put_paper
		- else:
			~ mistakes += 1
			Right after I put the paper into his pocket, the world starts swirling around me. 
			-> back_in_time.mess_up
		}
	+ [No, he is not the one.] I notice something off. No, he is not the one. 
		The universe has a way of protecting itself. 
		I feel faint. 
		-> back_in_time.start

- else:
	* I wait for very long, but no one appears. 
	-> wait_ending
}


= classroom
{not test.office:
	Suddenly, a student walks out. I recognize him as {name}. 
	{universe == "original":
		{wearing_hat:
			He is wearing a {hat_color} hat. 
		- else:
			He is not wearing a hat. 
		}
	- else:
		{wearing_hat:
			~ temp hatx = RANDOM(1, 2)
			{hatx == 1:
				He is wearing a {alternative_hat_color} hat. 
			- else:
				He is not wearing a hat. 
			}
		- else:
			He is wearing a {alternative_hat_color} hat.
		}
	}
	+ [Run and put the piece of paper in his pocket.] 
		{universe == "original":
			-> back_in_time.put_paper
		- else:
			~ mistakes += 1
			Right after I put the paper into his pocket, the world starts swirling around me. 
			-> back_in_time.mess_up
		}
	+ [No, he is not the one.] I notice something off. No, he is not the one. 
		The universe has a way of protecting itself. 
		I feel faint. 
		-> back_in_time.start

- else:
	* I wait for very long, but no one appears. 
	-> wait_ending
}

= put_paper
I run and put the piece of paper into his pocket, running away before he could see my face. 
I watch from the shadows as he heads towards the library. 

Relief washes over me. 

I have done it. 

+ {fall_in_love} [I suddenly don't want to leave.] But I suddenly remember {gf_name}'s face. 
	-> back_in_time.decide
+ Return to the Labyrinth. 
	-> happy_ending


= mess_up
I made a mistake.

{mistakes >= mistakes_threshold:
	-> failed_mission_ending
- else:
	Exhaustion strikes, and I fall asleep. 
	-> back_in_time.start
}

= decide
I don't know when I lost consciousness, but when I next awake, I see clouds and silver armour. 
I am amongst my own, once again. 

"You seem troubled," one of the elders peer at me. 

* "I have decided to stay in human form." 
	-> love_ending
* "It's nothing[."]," I shake my head, and hold out the Map. 
	-> happy_ending2 