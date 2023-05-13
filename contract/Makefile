ligo_compiler=docker run --rm -v "$(PWD)":"$(PWD)" -w "$(PWD)" ligolang/ligo:stable
# ^ Override this variable when you run make command by make <COMMAND> ligo_compiler=<LIGO_EXECUTABLE>
# ^ Otherwise use default one (you'll need docker)
protocol_opt=

# Deployment
contract_name=haks
wallet_name=alice
contract_michelson=compiled/contract.tz
contract_storage=$(shell cat storage.txt)

all: clean compile

help:
	@echo  'Usage:'
	@echo  '  all             - Remove generated Michelson files, recompile smart contracts and lauch all tests'
	@echo  '  clean           - Remove generated Michelson files'
	@echo  '  compile         - Compiles smart contract'
	@echo  '  test            - Run integration tests (written in Ligo)'
	@echo  '  deploy          - Deploy smart contract (typescript using Taquito)'
	@echo  ''

compile: src/main.jsligo
	@echo "Compiling smart contract to Michelson"
	@mkdir -p compiled
	@$(ligo_compiler) compile contract $^ -e main $(protocol_opt) > compiled/contract.tz

clean:
	@echo "Removing Michelson file"
	@rm -rf compiled/*.tz

test: test/test.mligo
	@echo "Running integration tests"
	@$(ligo_compiler) run test $^ $(protocol_opt)

deploy:
	octez-client originate contract ${contract_name} transferring 0 from ${wallet_name} running ${contract_michelson} --init '${contract_storage}' --burn-cap 1 --force

.PHONY: all help compile clean test deploy
