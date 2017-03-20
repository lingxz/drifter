=== function get_random_index ===
    ~ temp length = LIST_COUNT(LIST_ALL(names))
    ~ temp x = RANDOM(1, length)
    ~ return x

=== function get_random_answer ===
{shuffle:
    - ~ return "A"
    - ~ return "B"
    - ~ return "C"
    - ~ return "D"
    - ~ return "E"
}

=== function get_writing_instrument ===
{shuffle:
    - ~ return "blue pen"
    - ~ return "pencil"
    - ~ return "red pen"
    - ~ return "black pen"
}
