# Meetup

Calculate the date of meetups.

Typically meetups happen on the same day of the week.

Examples are

* the first Monday
* the third Tuesday
* the Wednesteenth
* the last Thursday

There are exactly 7 days that end in '-teenth', therefore one is
guaranteed that each day of the week will have a '-teenth' in every
month.

## Making the Test Suite Pass

Execute the tests with:

```bash
$ jasmine-node bob_test.spec.js
```

All but the first test have been skipped.

Once you get a test passing, you can unskip the next one by
changing `xit` to `it`.


## Source

Jeremy Hinegardner mentioned a Boulder meetup that happens on the Wednesteenth of every month [view source](https://twitter.com/copiousfreetime)
