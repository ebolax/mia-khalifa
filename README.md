# Mia Khalifa Importer

This repo contains a Nodejs module to import Mia Khalifa to your images

## Installation

npm install mia-khalifa --save

## Usage

MiaKhalifa.addToImage (original_image, export_image);

```
const MiaKhalifa = require('mia-khalifa');

MiaKhalifa.addToImage('test/test1.jpg', 'test/test1_new.jpg');
```

<img src="https://github.com/ebolax/mia-khalifa/raw/main/test/test1.jpg" alt="test1" width="200"/> -> <img src="https://github.com/ebolax/mia-khalifa/raw/main/test/test1_new.jpg" alt="test1" width="200"/>

<img src="https://github.com/ebolax/mia-khalifa/raw/main/test/test2.png" alt="test1" width="200"/> -> <img src="https://github.com/ebolax/mia-khalifa/raw/main/test/test2_new.png" alt="test1" width="200"/>

<img src="https://github.com/ebolax/mia-khalifa/raw/main/test/test3.jpg" alt="test1" width="200"/> -> <img src="https://github.com/ebolax/mia-khalifa/raw/main/test/test3_new.jpg" alt="test1" width="200"/>

## Use CLI

npm install mia-khalifa -g

```
mia-khalifa input_file output_file

mia-khalifa test.jpg test_new.jpg
```