.PHONY: hello

MESSAGE := hello

hello:
	echo $(MESSAGE)

# --

.PHONY: py

PYTHON = python

py:
	$(PYTHON) main.py

# --

greeting := holla
greetings := ciao mhoro talofa

$(greeting):
	echo "greeting"

$(greetings):
	echo "greetings"

# --

.PHONY: test a sleep b

immediate := $(shell date +%s)
lazy       = $(shell date +%s)

test: a sleep b

a:
	echo $(immediate) # immediate
	echo $(lazy) # lazy

sleep:
	sleep 3

b:
	echo $(immediate) # immediate
	echo $(lazy) # lazy
