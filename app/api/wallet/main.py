#!/usr/bin/python3
import sys
import json
from os.path import expanduser
from two1.wallet import Two1Wallet

class Wallet():
  def __init__(self):
    with open('{}/.two1/wallet/default_wallet.json'.format(expanduser('~'))) as data_file:
      wallet_data = json.load(data_file)
      self.two1Wallet = Two1Wallet.import_from_mnemonic(mnemonic=wallet_data['master_seed'])

  def address(self):
    return self.two1Wallet.get_payout_address()

  def confirmed(self):
    return self.two1Wallet.confirmed_balance()

  def unconfirmed(self):
    return self.two1Wallet.unconfirmed_balance()

  def history(self):
    return self.two1Wallet.transaction_history()


wallet = None
wallet = wallet or Wallet()

del sys.argv[0]
for arg in sys.argv:
  method = getattr(wallet, arg)
  print(json.dumps({ arg: method() }))


