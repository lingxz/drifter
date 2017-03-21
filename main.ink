INCLUDE variables.ink
INCLUDE utils.ink
INCLUDE 01-schoolboy-room.ink
INCLUDE 02-school.ink
INCLUDE endings.ink
INCLUDE 03-library.ink
INCLUDE 04-back-in-time.ink



I wake up. Something is wrong. 

This is not my body. 

// ~ temp state = get_random_index()
// ~ temp name = names(state)
~ temp name = "Connor"
VAR DEBUG = false
{DEBUG:
	IN DEBUG MODE!
	~ knows_gf = true
	* [bedroom] ->schoolboy_room
	* [school] -> school.start
	* [library] -> library.entrance
- else:
    * [Get up and look around. ] I get up and look around. 
    -> schoolboy_room
}
