var storyContent = ﻿{"inkVersion":16,"root":["ev",{"f()":"get_random_answer"},"/ev",{"temp=":"answer1","re":true},"ev",{"f()":"get_random_answer"},"/ev",{"temp=":"answer2","re":true},"ev",{"f()":"get_random_answer"},"/ev",{"temp=":"answer3","re":true},"ev",{"f()":"get_random_answer"},"/ev",{"temp=":"answer4","re":true},"ev",{"f()":"get_random_answer"},"/ev",{"temp=":"answer5","re":true},"\n","\n","ev",0,"/ev",{"temp=":"explore_counts"},"ev",1,"/ev",{"temp=":"first_explore"},"\n","\n","\n","^I wake up. Something is wrong.","\n","^This is not my body.","\n","ev","str","^Connor","/str","/ev",{"temp=":"name"},["ev","str","^Get up and look around. ","/str","/ev",{"*":"43.c","flg":20},{"c":["^ I get up and look around.","\n","\n",{"->":"schoolboy_room"},{"#f":7}]}],"done",{"get_random_index":["ev",{"VAR?":"names"},"LIST_ALL","LIST_COUNT","/ev",{"temp=":"length"},"ev",1,{"VAR?":"length"},"rnd","/ev",{"temp=":"x"},"ev",{"VAR?":"x"},"/ev","~ret",{"#f":3}],"get_random_answer":[["G>",["ev","visit",5,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"nop",{"s0":["pop","ev","str","^A","/str","/ev","~ret",{"->":".^.^.35"},null],"s1":["pop","ev","str","^B","/str","/ev","~ret",{"->":".^.^.35"},null],"s2":["pop","ev","str","^C","/str","/ev","~ret",{"->":".^.^.35"},null],"s3":["pop","ev","str","^D","/str","/ev","~ret",{"->":".^.^.35"},null],"s4":["pop","ev","str","^E","/str","/ev","~ret",{"->":".^.^.35"},null],"#f":5}],"G<",null],"\n",{"#f":3}],"schoolboy_room":["^It looks like a normal schoolboy's room. There is a stack of books on the table, and a name tag on the table. In the corner of the room, there is a wardrobe with a mirror. ",{"->":"explore_room.start"},"\n",{"#f":3}],"explore_room":[{"->":".^.start"},{"start":[["ev","str","^Go towards the table.","/str","/ev",{"*":".^.c","flg":4},{"c":["^ I walk towards the table. The first book on the stack says Chemistry. An A-level chemistry textbook. The nametag lay on its side.","\n","\n",{"->":".^.^.^.^.table"},{"#f":7}]}],["ev","str","^Go to the wardrobe.","/str","/ev",{"*":".^.c","flg":4},{"c":["^ I walk towards the wardrobe.","\n","\n",{"->":".^.^.^.^.wardrobe"},{"#f":7}]}],{"#f":3}],"wardrobe":[["G>","ev",{"CNT?":".^.^"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^I look at the mirror. Well, this dude is pretty good looking, at least I've got that going for me.","\n",{"->":".^.^.^.7"},null]}],"nop","G<",null],"\n",["ev",{"^->":"explore_room.wardrobe.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"explore_counts"},2,">",{"VAR?":"first_explore"},"!","&&","/ev",{"*":".^.c","flg":3},{"s":["^I have taken too long.",{"->":"$r","var":true},null],"c":["ev",{"^->":"explore_room.wardrobe.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.need_to_go"},{"#f":7}]}],["ev","str","^Open the wardrobe.","/str",{"VAR?":"explore_counts"},2,"<=",{"VAR?":"first_explore"},"||","/ev",{"*":".^.c","flg":5},{"c":["^ I open the wardrobe. This guy obviously likes black.","\n","\n","ev",{"VAR?":"explore_counts"},1,"+",{"temp=":"explore_counts","re":true},{"VAR?":"explore_counts"},"/ev",["ev",{"VAR?":"first_explore"},"/ev",{"*":".^.c","flg":25},{"c":[{"->":"explore_room.mum_calls"},{"#f":7}]}],["ev","str","^Look around to see if there's anything interesting.","/str",{"VAR?":"first_explore"},"!","/ev",{"*":".^.c","flg":5},{"c":["^ Wary of time, I rummage through his clothes.","\n","\n",{"->":"explore_room.inside_wardrobe"},{"#f":7}]}],{"#f":7}]}],["ev","str","^Go towards the table","/str",{"VAR?":"explore_counts"},2,"<=","/ev",{"*":".^.c","flg":5},{"c":["^ I walk towards the table.","\n","\n",{"->":".^.^.^.^.table"},{"#f":7}]}],{"#f":3}],"inside_wardrobe":[["G>","ev",{"VAR?":"seen_cheatsheet"},"!","/ev",[{"->":".^.b","c":true},{"b":["ev",{"^->":"explore_room.inside_wardrobe.0.5.b.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":2},{"->":".^.^.^.7"},{"s":["^There is a piece of paper sticking out of his jacket.",{"->":"$r","var":true},null],"c":["ev",{"^->":"explore_room.inside_wardrobe.0.5.b.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n","^I carefully straighten out the paper. There are ",["G>","ev",{"VAR?":"num_questions"},"out","/ev","G<",null],"^ letters written in bold with pencil, over and over again: ",["G>","ev",{"VAR?":"answer1"},"out","/ev","G<",null],["G>","ev",{"VAR?":"answer2"},"out","/ev","G<",null],["G>","ev",{"VAR?":"answer3"},"out","/ev","G<",null],["G>","ev",{"VAR?":"answer4"},"out","/ev","G<",null],["G>","ev",{"VAR?":"answer5"},"out","/ev","G<",null],"\n","ev",1,"/ev",{"temp=":"seen_cheatsheet","re":true},["ev",{"^->":"explore_room.inside_wardrobe.0.5.b.c.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":2},{"s":["^What does this mean? ",{"->":"$r","var":true},null],"c":["ev",{"^->":"explore_room.inside_wardrobe.0.5.b.c.20.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^I wonder.","\n","\n","^The paper looks ancient, and the handwriting looks strange.","\n","^I should probably remember this.","\n",["ev","str","^Take the paper.","/str","/ev",{"*":".^.c","flg":4},{"c":["^ I mutter the ",["G>","ev",{"VAR?":"num_questions"},"out","/ev","G<",null],"^ letters as I pocket the piece of paper. Hopefully it will come in useful.","\n","\n","ev",1,"/ev",{"temp=":"has_cheatsheet","re":true},{"->":"explore_room.wardrobe"},{"#f":7}]}],["ev","str","^Leave it there.","/str","/ev",{"*":".^.c","flg":4},{"c":["^ I'm not the owner of this body. It is not good to take things at will.","\n","\n",{"->":"explore_room.wardrobe"},{"#f":7}]}],{"#f":7}]}],{"#f":7}]}]}],[{"->":".^.b"},{"b":["^There is nothing new here.","\n",["ev","str","^The piece of paper is still there. Take it with me?","/str",{"VAR?":"has_cheatsheet"},"!","/ev",{"*":".^.c","flg":5},{"c":["^ I mutter the ",["G>","ev",{"VAR?":"num_questions"},"out","/ev","G<",null],"^ letters as I pocket the piece of paper. Hopefully it will come in useful.","\n","\n","ev",1,"/ev",{"temp=":"has_cheatsheet","re":true},{"->":"explore_room.wardrobe"},{"#f":7}]}],["ev","str","^Go back.","/str","/ev",{"*":".^.c","flg":4},{"c":[{"->":"explore_room.wardrobe"},{"#f":7}]}],{"->":".^.^.^.7"},null]}],"nop","G<",null],"\n",{"#f":3}],"table":[["ev","str","^Look at the name tag.","/str",{"VAR?":"explore_counts"},2,"<=",{"VAR?":"first_explore"},"||","/ev",{"*":".^.c","flg":5},{"c":["^ I look at the name tag.","\n","\n","ev",{"VAR?":"explore_counts"},1,"+",{"temp=":"explore_counts","re":true},{"VAR?":"explore_counts"},"/ev","^It says ",["G>","ev",{"VAR?":"name"},"out","/ev","G<",null],"^.","\n","ev",1,"/ev",{"temp=":"knows_name","re":true},["ev",{"VAR?":"first_explore"},"/ev",{"*":".^.c","flg":9},{"c":[{"->":"explore_room.mum_calls"},{"#f":7}]}],["ev","str","^Go back.","/str",{"VAR?":"first_explore"},"!","/ev",{"*":".^.c","flg":5},{"c":[{"->":".^.^.^.^.^"},{"#f":7}]}],{"#f":7}]}],["ev","str","^Check out the books.","/str",{"VAR?":"explore_counts"},2,"<=",{"VAR?":"first_explore"},"||","/ev",{"*":".^.c","flg":5},{"c":["^ I briefly flip through the books. Something catches my eye.","\n","\n","ev",{"VAR?":"explore_counts"},1,"+",{"temp=":"explore_counts","re":true},{"VAR?":"explore_counts"},"/ev",["ev",{"VAR?":"first_explore"},"/ev",{"*":".^.c","flg":9},{"c":[{"->":"explore_room.mum_calls"},{"#f":7}]}],["ev",{"^->":"explore_room.table.1.c.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"first_explore"},"!","/ev",{"*":".^.c","flg":3},{"s":["^What's that?",{"->":"$r","var":true},null],"c":["ev",{"^->":"explore_room.table.1.c.11.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"girlfriend_photo"},{"#f":7}]}],["ev",{"^->":"explore_room.table.1.c.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"first_explore"},"!","/ev",{"*":".^.c","flg":3},{"s":["^Never mind.",{"->":"$r","var":true},null],"c":["ev",{"^->":"explore_room.table.1.c.12.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",["ev","str","^Go back.","/str","/ev",{"*":".^.c","flg":4},{"c":[{"->":".^.^.^.^.^.^.^"},{"#f":7}]}],{"#f":7}]}],{"#f":7}]}],["ev","str","^Go to the wardrobe.","/str",{"VAR?":"explore_counts"},2,"<=",{"VAR?":"first_explore"},"||","/ev",{"*":".^.c","flg":5},{"c":["^ I walk towards the wardrobe.","\n","\n",{"->":".^.^.^.^.wardrobe"},{"#f":7}]}],["ev",{"^->":"explore_room.table.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"explore_counts"},2,">",{"VAR?":"first_explore"},"!","&&","/ev",{"*":".^.c","flg":3},{"s":["^I have taken too long.",{"->":"$r","var":true},null],"c":["ev",{"^->":"explore_room.table.3.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.need_to_go"},{"#f":7}]}],{"#f":3}],"mum_calls":[["^\"Hey, ",["G>","ev",{"VAR?":"name"},"out","/ev","G<",null],"^, it's time for school!\" A voice calls, and middle aged woman steps into the room.","\n","ev",0,"/ev",{"temp=":"first_explore","re":true},"ev",0,"/ev",{"temp=":"explore_counts","re":true},["ev",{"^->":"explore_room.mum_calls.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"knows_name"},"/ev",{"*":".^.c","flg":3},{"s":["^\"Coming!\" ",{"->":"$r","var":true},null],"c":["ev",{"^->":"explore_room.mum_calls.0.12.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^ I shout back.","\n","\n","^I have a few more minutes to explore.","\n",{"->":".^.^.^.^.^.start"},{"->":".^.^.^.g-0"},{"#f":7}]}],["ev",{"^->":"explore_room.mum_calls.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"knows_name"},"!","/ev",{"*":".^.c","flg":19},{"s":["^\"Who's ",["G>","ev",{"VAR?":"name"},"out","/ev","G<",null],"^?\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"explore_room.mum_calls.0.13.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^ I say, confused.","\n","\n","ev",1,"/ev",{"temp=":"mum_suspicious","re":true},"^\"Are you okay?\" She seems concerned.","\n",["ev",{"^->":"explore_room.mum_calls.0.13.c.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Uh oh. ",["G>","ev",{"VAR?":"name"},"out","/ev","G<",null],"^ is probably the name of this body.",{"->":"$r","var":true},null],"c":["ev",{"^->":"explore_room.mum_calls.0.13.c.15.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.^.g-0"},{"#f":7}]}],{"#f":7}]}],{"g-0":["^She stretches out her hand and touches my forehead.","\n","^\"Oh dear, you're having a fever! Do you want to go to the doctor?\"","\n",["ev",{"^->":"explore_room.mum_calls.0.g-0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Yes, I think I need a doctor.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"explore_room.mum_calls.0.g-0.4.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"go_to_doctor"},{"#f":7}]}],["ev",{"^->":"explore_room.mum_calls.0.g-0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"No, I think I'm fine.\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"explore_room.mum_calls.0.g-0.5.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n","^\"Okay then. Get ready quick, you're going to be late,\" She peers at me before leaving the room.","\n","^I have a few more minutes to explore.","\n","ev",0,"/ev",{"temp=":"explore_counts","re":true},{"->":"explore_room.start"},{"#f":7}]}],{"#f":7}]}],{"#f":3}],"need_to_go":[["ev",{"^->":"explore_room.need_to_go.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":2},{"s":["^It's about time to go out. ",["G>","ev",{"VAR?":"name"},"out","/ev","G<",null],"^'s mother is waiting.",{"->":"$r","var":true},null],"c":["ev",{"^->":"explore_room.need_to_go.0.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"before_going_outside"},{"#f":7}]}],{"#f":3}],"#f":3}],"girlfriend_photo":["ev",1,"/ev",{"temp=":"knows_gf","re":true},["ev",{"CNT?":".^.^"},1,"==","/ev",{"*":".^.c","flg":9},{"c":[{"->":".^.^.^.first_time"},{"#f":7}]}],["ev",{"CNT?":".^.^"},1,">","/ev",{"*":".^.c","flg":9},{"c":[{"->":".^.^.^.subsequent_times"},{"#f":7}]}],{"first_time":["^It's a photo of a girl. There is a heart written at the back. ",["G>","ev",{"VAR?":"name"},"out","/ev","G<",null],"^'s girlfriend?","\n",["ev","str","^Take it with me. ","/str",{"CNT?":".^.^.^"},1,"==","/ev",{"*":".^.c","flg":21},{"c":["^ I carefully pick up the photo and put it in my pocket.","\n","\n","ev",1,"/ev",{"temp=":"took_gf_photo","re":true},["ev","str","^Go back.","/str","/ev",{"*":".^.c","flg":4},{"c":[{"->":"explore_room.table"},{"#f":7}]}],{"#f":7}]}],["ev","str","^Leave it there. It's not good to take things without permission.","/str",{"CNT?":".^.^.^"},1,"==","/ev",{"*":".^.c","flg":21},{"c":["^ I put the photo back.","\n","\n",["ev","str","^Go back.","/str","/ev",{"*":".^.c","flg":4},{"c":[{"->":"explore_room.table"},{"#f":7}]}],{"#f":7}]}],{"#f":3}],"subsequent_times":["^There's nothing new here.","\n",["ev","str","^The photo of ",["G>","ev",{"VAR?":"name"},"out","/ev","G<",null],"^'s girlfriend is still here. Take it with me?","/str",{"VAR?":"took_gf_photo"},"!","/ev",{"*":".^.c","flg":21},{"c":["^ I decide to take the photo.","\n","\n",{"#f":7}]}],["ev","str","^Go back","/str","/ev",{"*":".^.c","flg":4},{"c":[{"->":"explore_room.table"},{"#f":7}]}],{"#f":3}],"#f":3}],"before_going_outside":["^I go outside. The mother busies herself around me.","\n",["G>","ev",{"CNT?":".^.^"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^\"Oh dear, you look feverish,\" she suddenly exclaims. \"Do you need to go to the doctor?\"","\n",["ev",{"^->":"before_going_outside.2.6.b.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^.\"","/str","/ev",{"*":".^.c","flg":22},{"s":["^\"No, I'm fine",{"->":"$r","var":true},null],"c":["ev",{"^->":"before_going_outside.2.6.b.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^,\" I reply.","\n","\n",{"->":"go_to_school"},{"#f":7}]}],["ev","str","^\"Yes, I think I'm sick.\"","/str","/ev",{"*":".^.c","flg":20},{"c":["^ \"Yes, I think I'm sick,\" I reply. Maybe the doctor would be able to tell me what is going on.","\n","\n",{"->":"go_to_doctor"},{"#f":7}]}],{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":[{"->":"go_to_school"},{"->":".^.^.^.8"},null]}],"nop","G<",null],"\n",{"#f":3}],"go_to_school":["^Before long, I am on my way to school.","\n",{"->":"school.start"},{"#f":3}],"go_to_doctor":[["^She drives me to the doctor.","\n","^He looks oddly familiar.","\n","^\"How has he been recently?\" he asks.","\n",["ev",{"^->":"go_to_doctor.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^I thought I saw something dangerous in his eyes when he spoke.",{"->":"$r","var":true},null],"c":["ev",{"^->":"go_to_doctor.0.6.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-0"},{"#f":7}]}],{"g-0":[["G>","ev",{"VAR?":"mum_suspicious"},"/ev",[{"->":".^.b","c":true},{"b":["^\"Oh, I don't know, Dr ",["G>","ev",{"VAR?":"doctor_name"},"out","/ev","G<",null],"^. He was acting strange just this morning. That's why I was worried.\"","\n",["ev",{"^->":"go_to_doctor.0.g-0.0.4.b.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^The look on his face darkens.",{"->":"$r","var":true},null],"c":["ev",{"^->":"go_to_doctor.0.g-0.0.4.b.4.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n","^\"Sure, I just need to do some checkups on him to make sure he's fine. In the meantime, would you mind waiting outside?\"","\n","^Something does not feel right.","\n","^\"Sure,\" she happily obliged.","\n",["ev",{"^->":"go_to_doctor.0.g-0.0.4.b.4.c.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^The door closes behind her.",{"->":"$r","var":true},null],"c":["ev",{"^->":"go_to_doctor.0.g-0.0.4.b.4.c.13.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"killed_by_doctor_ending"},{"#f":7}]}],{"#f":7}]}],{"->":".^.^.^.5"},null]}],"nop","G<",null],"\n",["G>","ev",{"VAR?":"mum_suspicious"},"!","/ev",[{"->":".^.b","c":true},{"b":["^\"Oh, he's excellent, Dr ",["G>","ev",{"VAR?":"doctor_name"},"out","/ev","G<",null],"^. I just thought he looked feverish this morning,\" the mother replied, looking slightly worried.","\n","^I look again. The dangerous look is gone.","\n",["ev",{"^->":"go_to_doctor.0.g-0.2.5.b.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Maybe it was just an illusion.",{"->":"$r","var":true},null],"c":["ev",{"^->":"go_to_doctor.0.g-0.2.5.b.6.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n","^He gives me a regular checkup and tells the mother that it's nothing much and I just need a rest.","\n","^The mother hurries me home and makes me sleep while she watches over me worriedly.","\n",["ev",{"^->":"go_to_doctor.0.g-0.2.5.b.6.c.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^The next day, my fever subsides.",{"->":"$r","var":true},null],"c":["ev",{"^->":"go_to_doctor.0.g-0.2.5.b.6.c.11.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n","ev",0,"/ev",{"temp=":"explore_counts","re":true},"^She tells me to get ready for school again. I have a few more minutes to look around the room before she barges in. ",{"->":"explore_room.start"},"\n",{"#f":7}]}],{"#f":7}]}],{"->":".^.^.^.6"},null]}],"nop","G<",null],"\n",{"#f":7}]}],{"#f":3}],"school":[{"->":".^.start"},{"start":["^== CHAPTER 2 ===","\n","^I don't know where to go. So I follow the crowd.","\n",{"#f":3}],"#f":3}],"killed_by_doctor_ending":[["^\"You shouldn't have come here, ",["G>","ev",{"VAR?":"original_name"},"out","/ev","G<",null],"^.\"","\n",["ev",{"^->":"killed_by_doctor_ending.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^\"","/str","/ev",{"*":".^.c","flg":22},{"s":["^\"",["G>","ev",{"VAR?":"original_name"},"out","/ev","G<",null],"^?",{"->":"$r","var":true},null],"c":["ev",{"^->":"killed_by_doctor_ending.0.4.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^ Who is that?\" I repeat, confused.","\n","\n","^\"The game is over, ",["G>","ev",{"VAR?":"original_name"},"out","/ev","G<",null],"^. You are too powerful. We cannot allow you to live. Even in this mortal state.\"","\n",{"->":".^.^.^.g-0"},{"#f":7}]}],["ev","str","^Ignore him and try to run.","/str","/ev",{"*":".^.c","flg":20},{"c":["^I try to run. But the doctor is prepared. He grabs me by the collar and throws me back onto the chair.","\n","^\"Look at you, ",["G>","ev",{"VAR?":"original_name"},"out","/ev","G<",null],"^. To think you were so powerful then.\"","\n",{"->":".^.^.^.g-0"},{"#f":7}]}],["ev",{"^->":"killed_by_doctor_ending.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^\"Powerful?\"",{"->":"$r","var":true},null],"c":["ev",{"^->":"killed_by_doctor_ending.0.6.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^ What is he talking about?","\n","\n",{"->":".^.^.^.g-0"},{"#f":7}]}],{"g-0":["^But there is no time to think.","\n","^He raises a gun.","\n","^\"Goodbye.\"","\n",["ev",{"^->":"killed_by_doctor_ending.0.g-0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^I hear metal flying through the air.",{"->":"$r","var":true},null],"c":["ev",{"^->":"killed_by_doctor_ending.0.g-0.6.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n","^I don't even remember hitting the ground.","\n","^The end.","\n","end",{"#f":7}]}],{"#f":7}]}],{"#f":3}],"global decl":["ev",{"list":{},"origins":["names"]},{"VAR=":"names"},"str","^Ray","/str",{"VAR=":"original_name"},0,{"VAR=":"power_activated"},5,{"VAR=":"num_questions"},"str","^A","/str",{"VAR=":"answer1"},"str","^A","/str",{"VAR=":"answer2"},"str","^A","/str",{"VAR=":"answer3"},"str","^A","/str",{"VAR=":"answer4"},"str","^A","/str",{"VAR=":"answer5"},0,{"VAR=":"knows_name"},0,{"VAR=":"mum_suspicious"},0,{"VAR=":"knows_gf"},0,{"VAR=":"took_gf_photo"},"str","^Williams","/str",{"VAR=":"doctor_name"},0,{"VAR=":"seen_cheatsheet"},0,{"VAR=":"has_cheatsheet"},"/ev","end",null],"#f":3}],"listDefs":{"names":{"Connor":1,"James":2,"Holly":3,"Alex":4,"Luna":5,"Zero":6}}};