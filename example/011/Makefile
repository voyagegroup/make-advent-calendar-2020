.PHONY: help ls cat op1 op2 shell-status subshell s3ls

PROFILE :=
REGION :=
BUCKET := s3://example.com/

ls := $(shell ls)
cat := $(shell cat list.txt)
op != date +%s
aws := aws --profile=$(PROFILE) --region=$(REGION)
s3ls ?= $(shell $(aws) s3 ls $(BUCKET) | awk '{print $$4}')

help:
	@cat $(firstword $(MAKEFILE_LIST))

ls:
	echo $(ls)
	echo $(firstword $(ls))

cat:
	echo $(cat)
	echo $(lastword $(cat))

op1:
	echo $(op)
	sleep 3
	echo $(op)

op2:
	echo $(op)

shell-status:
	@echo $(shell pwd)
	echo $(.SHELLSTATUS)
	@echo $(shell exit 127)
	echo $(.SHELLSTATUS)

subshell:
	ls -lsa $$(pwd)

s3ls:
	echo $(s3ls)