.PHONY: clean

# http://www.imagemagick.org/Usage/distorts/
koala.gif:
	curl http://www.imagemagick.org/Usage/images/koala.gif > $@

distortion.gif: koala.gif
	convert $< -virtual-pixel Black -define shepards:power=8.0 -distort Shepards '30,11 20,11  48,29 58,29' $@

clean:
	rm -rf distortion.gif