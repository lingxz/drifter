=== function get_random_index ===
    ~ temp length = LIST_COUNT(LIST_ALL(names))
    ~ temp x = RANDOM(1, length)
    ~ return x