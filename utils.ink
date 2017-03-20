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

== function get_writing_instrument_alternative(current) ===
    ~ temp instrument = get_writing_instrument()
    {instrument == current:
        get_writing_instrument_alternative
    - else:
        ~ return instrument
    }

=== function get_color ===
{shuffle:
    - ~ return "green"
    - ~ return "red"
    - ~ return "yellow"
    - ~ return "black"
    - ~ return "purple"
}

=== function get_alternate_color ===
{not wearing_hat:
    - ~ return get_color()
}

{wearing_hat:
    ~ temp color = get_color()
    {color == hat_color:
        get_alternate_color()
    - else:
        ~ return color
    }
}

=== function set_universe ===
~ temp x = RANDOM(1, 5)
{x == 1:
    ~ return "original"
- else:
    ~ return "fake"
}
