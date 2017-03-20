VAR read_books = 0
VAR max_books = 2
VAR met_teacher = false
VAR watched = true

=== library ===
= entrance
The library is quiet. 

{read_books > max_books and not met_teacher:
    From the corner of my eye I see the invigilator from the test just now. He notices me. 
    ~ met_teacher = true
    {teacher_suspicious:
        "What are you doing here?"
        I froze. 
        What should I say?
        * "Just looking around. I think a student is allowed to be in the library[."]," I shrug. 
            He looks unconvinced. As I turn away from him, I can feel his eyes on me. -> library.entrance
        * "Looking for something. Do you know what is {isbn}?" I show him the note. 
            His expression changes. 
            -> reveal_map_ending
    - else:
        He gives me a nod and turns away. 
        Phew. I wouldn't want to be noticed by him. I don't feel good about him. 
        -> library.entrance
    }
}

+ [Go towards the shelf on the left.] I walk towards the right shelf. -> library.right_shelf
+ [Go towards the shelf on the right.] I walk towards the left shelf. -> library.left_shelf
+ [Go towards the browsing trolley. ] I walk towards the browsing trolley. -> library.trolley
+ [Go towards the row of computers.] I walk towards the computers. -> library.computers

= left_shelf
There are a few books and CDs on the shelf. 
+ [Pick up a book.] I decide to pick up a book. But which one?
    ++ [{book2}]
        Looks like a nice book, but I don't have a library card. 
        ~ read_books += 1
    ++ [{book3}]
        Hmm. Interesting book. 
        ~ read_books += 1
    ++ [{book4}]
        Maybe I'll read this some time.
        ~ read_books += 1
    - [Go back to the entrance] I walk back to the entrance. -> library.entrance
+ [Go back to the entrance] I walk back to the entrance. -> library.entrance
- [Go back to the entrance] I walk back to the entrance. -> library.entrance

= right_shelf
+ [Pick up a book.] I decide to pick up a book. But which one?
    ++ [{randombook3}]
        Looks like a nice book, but I don't have a library card. 
        ~ read_books += 1
    ++ [{randombook4}]
        Hmm. Interesting book. 
        ~ read_books += 1
    ++ [{book5}]
        Maybe I'll read this some time.
        ~ read_books += 1
There are a few books on the shelf. 
+ [Go back to the entrance] I walk back to the entrance. -> library.entrance

= computers
I sit down at one of the computers. 

Maybe Google will tell me what the number means?

+ [Key the numbers into the search engine.] I key those numbers into the search engine.
    But there is no internet connection. 
+ [Go back to the entrance] I walk back to the entrance. -> library.entrance
- 
+ [Go back to the entrance] I walk back to the entrance. -> library.entrance

= trolley
There are a few books scattered on the trolley. 
+ [Pick up a book.] I decide to pick up a book. But which one?
    ++ [{book1}]
        Hmm. Interesting book. 
        ~ read_books += 1
    ++ [{randombook1}]
        ~ read_books += 1
        Looks like a nice book, but I don't have a library card. 
    ++ [{book_title}]
        ~ read_books += 1
        -> library.correct_book
    ++ [{randombook2}]
        ~ read_books += 1
        Maybe I'll read this some time. 
+ [Go back to the entrance] I walk back to the entrance. -> library.entrance
- [Go back to the entrance] I walk back to the entrance. -> library.entrance

= correct_book
As I pick up the book, a piece of parchment falls out. 

A map. 

A splittting headache hits me, and suddenly I remember. 

{not watched:
    -> memory
- else:
    The invigilator walks over, and tries to snatch the piece of paper from me. 
    {power_activated: 
        But it is too late. 
        With memory comes power. He falls over in shock, looks in my eyes, and his expression turned to fear. 
        "You remember?"
        * Yes, I remember. 
        -> memory 
    - else:
        I was too slow to stop him. 
        His eyes becomes bright. He cannot help but laugh, and I hear triumph in that laugh. 
        -> die_in_library_ending
    }
}


=== memory ===

I was cornered. I hid the Map, in a desperate attempt to hide it from them. 

In this very place. 

But I couldn't retrieve it in time, before I left the body. 

Every Drifter takes human form once a year to maintain their magical powers. That is when we are most vulnerable. Any more, we would have to defy nature. 

But if they have the Map, they have the Labyrinth; and if they have the Labyrinth, they would win the war. 

That cannot happen. 

In a desperate attempt, I retook human form. But I lost all my memories. I guided myself to this place. How is that possible? It is a risky venture. I remember other Drifters protesting. One wrong step, and the fabric upon which we stand will collapse on itself. 

But finally I am here. 

I fast forwarded time. 

Now I have to go back in time, to close the loop. 

* [Continue] 
    -> back_in_time













