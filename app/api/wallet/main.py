#!/usr/bin/python3
import sys
import json
from os.path import expanduser
from two1.wallet import Two1Wallet
from two1.commands.util.currency import Price

class Wallet():
  def __init__(self):
    with open('{}/.two1/wallet/default_wallet.json'.format(expanduser('~'))) as data_file:
      wallet_data = json.load(data_file)
      self.two1Wallet = Two1Wallet.import_from_mnemonic(mnemonic=wallet_data['master_seed'])

  def address(self):
    return self.two1Wallet.get_payout_address()
    return self.two1Wallet.get_payout_address()

  def confirmed(self):
    return self.two1Wallet.confirmed_balance()

  def unconfirmed(self):
    return self.two1Wallet.unconfirmed_balance()


wallet = None
wallet = wallet or Wallet()

method = getattr(wallet, sys.argv[1])
print(json.dumps({ 'data': method() }))


