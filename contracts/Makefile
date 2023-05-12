ligo_compiler=docker run --rm -v "$(PWD)":"$(PWD)" -w "$(PWD)" ligolang/ligo:stable
# ^ Override this variable when you run make command by make <COMMAND> ligo_compiler=<LIGO_EXECUTABLE>
# ^ Otherwise use default one (you'll need docker)
protocol_opt=
JSON_OPT=--michelson-format json
tsc=npx tsc
help:
	@echo  'Usage:'
	@echo  '  all             - Remove generated Michelson files, recompile smart contracts and lauch all tests'
	@echo  '  clean           - Remove generated Michelson files'
	@echo  '  compile         - Compiles smart contract Shifumi'
	@echo  '  test            - Run integration tests (written in Ligo)'
	@echo  '  deploy          - Deploy smart contract Shifumi (typescript using Taquito)'
	@echo  ''

all: clean compile test

compile: shifumi

shifumi: shifumi.tz shifumi.json

shifumi.tz: src/main.jsligo
	@echo "Compiling smart contract to Michelson"
	@mkdir -p compiled
	@$(ligo_compiler) compile contract $^ -e main $(protocol_opt) > compiled/$@

shifumi.json: src/main.jsligo
	@echo "Compiling smart contract to Michelson in JSON format"
	@mkdir -p compiled
	@$(ligo_compiler) compile contract $^ $(JSON_OPT) -e main $(protocol_opt) > compiled/$@

clean:
	@echo "Removing Michelson files"
	@rm -rf compiled/*.tz compiled/*.json

test: test_ligo

test_ligo: test/test.mligo
	@echo "Running integration tests"
	@$(ligo_compiler) run test $^ $(protocol_opt)

deploy: node_modules deploy.js

deploy.js:
	@if [ ! -f ./deploy/metadata.json ]; then cp deploy/metadata.json.dist deploy/metadata.json ; fi
	@echo "Running deploy script\n"
	@cd deploy && npm start

node_modules:
	@echo "Installing deploy script dependencies"
	@cd deploy && npm install
	@echo ""


metadata.json:
	@echo "Generate metadata.json"
	@if [ ! -f ./deploy/metadata.json ]; then cp deploy/metadata.json.dist \
        deploy/metadata.json ; fi
