#!/bin/sh

set -e

test 0 = 0
test 1 != 1 # would fail
test 2 = 2
