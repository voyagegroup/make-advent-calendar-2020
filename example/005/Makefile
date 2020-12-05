.PHONY: all touched clean

all: touched
	pwd
	ls -lsa touched

touched:
	date +%s > $@

clean:
	rm -rf touched