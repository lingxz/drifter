LIST names = Connor, James, Holly, Alex, Luna, Zero
VAR original_name = "Ray"
VAR power_activated = false
VAR isbn = "9780140434187"
VAR book_title = "Wuthering Heights"
VAR google_result = "AbeBooks.com: Wuthering Heights (Penguin Classics) (9780140434187) by Emily Bronte and a great selection of similar New, Used and Collectible Books ..."


VAR gf_name = "Lea"
VAR mistakes = 0
VAR mistakes_threshold = 2

VAR writing_instrument = false
VAR alternative_writing_instrument = false
VAR alternative_hat_color = false
VAR universe = "original"

VAR num_questions = 5
VAR answer1 = "A"
VAR answer2 = "A"
VAR answer3 = "A"
VAR answer4 = "A"
VAR answer5 = "A"

VAR book1 = "Robin Hood"
VAR book2 = "Les Miserables"
VAR book3 = "The Little Prince"
VAR book4 = "Gone with the Wind"
VAR book5 = "Oliver Twist"

VAR randombook1 = "University Physics"
VAR randombook2 = "Manta's Ray"
VAR randombook3 = "The Fault in Our Stars"
VAR randombook4 = "Picture Perfect"

~ answer1 = get_random_answer()
~ answer2 = get_random_answer()
~ answer3 = get_random_answer()
~ answer4 = get_random_answer()
~ answer5 = get_random_answer()

~ writing_instrument = get_writing_instrument()
~ alternative_writing_instrument = get_writing_instrument_alternative(writing_instrument)
~ alternative_hat_color = get_alternate_color()