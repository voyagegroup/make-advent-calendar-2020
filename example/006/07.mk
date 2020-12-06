.PHONY: list

LIST := hoge fuga vaa

list:
	echo $(firstword $(LIST))
