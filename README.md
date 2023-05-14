# Haks 2023 - Stake & Share

![logo](/.github/assets/logo.png)

Stake & Share is a platform allowing people to make automatic donations to their favorite charities and NGOs, without having to spend money.


## How does it work?

The project is based on [the *Tezos* blockchain](https://tezos.com/), allowing donators to use a process named staking to delegate their tokens to a baker that will generate an income from it. This income will then be redistributed to the charities chosen by the donator, allowing them to receive donations without the donator having to spend money.

Stake & Share allows charities to create a profile on the platform, which will then be displayed to donators who can delegate XTZ tokens to them to generate an income.

The tokens delegated by the donators are not given to the association, and can be withdrawn **at any time**. The association will receive rewards based on the amount of tokens delegated to them, and how much time they are delegated.

## Getting Started

As a user of Stake & Share, the application can be accessed through this [deployed MVP](https://stakeandshare.vercel.app/), which is using [this smart contract](https://better-call.dev/ghostnet/KT1X6hsvENH3ZfYuVoV8YSjsMjq7zALZoeCZ/operations)

If you want to run the project locally, please follow the instructions below.

### Installation

In order to run the project locally, you will need to install the following dependencies:

- [Docker](https://docs.docker.com/get-docker/)
- [Octez-client](https://tezos.gitlab.io/introduction/howtoget.html#installing-the-tezos-client)
- [Ligo](https://ligolang.org/docs/intro/installation/)

> 💡 To test the project, we recommend using the [Tezos ghostnet](https://ghostnet.tzkt.io/). You can find more information about it [here](https://tezos.gitlab.io/introduction/test_networks.html)

## Quickstart

There is two main steps to launch the project:

### I. Deploy the smart contract

Stake & Share has its own smart contract, written in [JSLigo](https://ligolang.org/?lang=jsligo).
Here is a command to compile and deploy it:

```bash
make -C contract/ && make -C contract/ deploy
```

> 💡 You can use [better-call.dev](https://better-call.dev/) to track your smart contract.

### II. Run the application

Now that the smart contract is deployed, you can run the application using docker.

In order to do so, you will need to create an `.env` file at the root of the project, containing the following variables:
```
NEXT_PUBLIC_CONTRACT_ADDRESS=<your smart contract address>
```

Then, you can run the application using the following commands:
```bash
docker build . -t stake-and-share:latest
docker run -p 3000:3000 stake-and-share:latest
```

Finally, you can access to your application using [this link](http://localhost:3000) 🚀

## Usage

The application is divided in two parts, depending on whether you are a donator or an association.

The first step is to connect your wallet to the application. You can do so by clicking on the **Connect** button on the top right corner of the screen.

### Donators

As a donator, the application will display a list of charities, allowing you to choose which one you want to support.

Once you have chosen an charity, you can click on the **Support** button, which will open a modal allowing you to choose the amount of tokens you want to stake.

As mentioned before, the tokens you deposit through the applications **are not** given to the charity, and you can withdraw them at any time, partially or totally using the **Withdraw** button.

### Charities

As a charity, you can create a profile on the platform, which will be displayed to donators. After connecting your wallet, you can click on the *Start as charity* button, which will open a modal allowing you to specify your information. 

> For now, only the name is required, but this might change in the near future.

Once your association is created, it is automatically referenced on the donators page, who can start to stake their tokens for your association. You will then accumulate staking rewards based on the amount of tokens people stake for you, and you can retrieve the amount of rewards you have accumulated on your dashboard.

Finally, at any moment, you can withdraw the rewards by clicking on the **Claim** button.

> On the Tezos ghostnet, you can generate tokens and send them to your wallet using a [faucet](https://faucet.ghostnet.teztnets.xyz/).

## Authors 
| [<img src="https://github.com/Nfire2103.png?size=85" width=85><br><sub>Nathan Flattin</sub>](https://github.com/Nfire2103) | [<img src="https://github.com/YanisBoumedad.png?size=85" width=85><br><sub>Yanis Boumedad</sub>](https://github.com/YanisBoumedad) | [<img src="https://github.com/EdenComp.png?size=85" width=85><br><sub>Florian Lauch</sub>](https://github.com/EdenComp) | [<img src="https://github.com/adamdeziri.png?size=85" width=85><br><sub>Adam Deziri</sub>](https://github.com/adamdeziri) | [<img src="https://github.com/molaryy.png?size=85" width=85><br><sub>Mohammed Jbilou</sub>](https://github.com/molaryy) | [<img src="https://github.com/RezaRahemtola.png?size=85" width=85><br><sub>Reza Rahemtola</sub>](https://github.com/RezaRahemtola)
|:---:|:---:|:---:|:---:|:---:|:---:|
