all:
	mkdir -p _build
	mkdir -p _build/data
	cp -r css _build
	cp -r js _build
	cp -r lib _build
	cp -r text _build
	cp -r prepare_data.ipynb _build
	cp -r *pdf _build
	cp -r README.* _build
	cp -r index.html _build
	cp -r data/delays_cause_year.csv _build/data
	cp -r data/causeby_carrier.csv _build/data
	cp -r data/airport_causes.csv  _build/data
	cd _build && zip -r delivery.zip *
	