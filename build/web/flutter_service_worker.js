'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fae81cf96daf0548735d143ebb1bf8aa",
"assets/AssetManifest.bin.json": "0fb55c552add9bee78392410125e4dae",
"assets/AssetManifest.json": "7a26cbe1699fba1ed579ecec6bf6ea93",
"assets/assets/data/datasx.json": "a6176d47739de7afa36aa799d812f4fd",
"assets/assets/data/product.json": "b4511b365dd3ed3bdd3bc5d1b15ec5dd",
"assets/assets/fonts/muli/Muli-Bold.ttf": "1e36ee6d50c037b1bb4bdd3effa7a28e",
"assets/assets/fonts/muli/Muli-Light.ttf": "6b667c3dbc3d4df6dd096ad18296704d",
"assets/assets/fonts/muli/Muli.ttf": "df7330254513d2fa2f4c1e9ee98cc6c6",
"assets/assets/icons/014-grasshopper.svg": "fd13f1ca5d6f781f09d02a3195888d6d",
"assets/assets/icons/arrow_right.svg": "7d2e92d8f069ee2c73f1820beea62dfd",
"assets/assets/icons/Back%2520ICon.svg": "a1540761ddc4d5ebd1ebf7e732a7af0a",
"assets/assets/icons/Bell.svg": "03c0fc05f0c26d3107496511ef140dd2",
"assets/assets/icons/Bill%2520Icon.svg": "c14fba2dc1da1beac210bc96c90568a6",
"assets/assets/icons/Call.svg": "52af54660badff2b15a84fd34203c7ee",
"assets/assets/icons/Camera%2520Icon.svg": "25207a856bce06a7c1f4d695638a0383",
"assets/assets/icons/Cart%2520Icon.svg": "220f5aa89905b1351c4fdf71aee29f11",
"assets/assets/icons/Cash.svg": "9a1bfa4f03729b332bb98439f713637e",
"assets/assets/icons/Chat%2520bubble%2520Icon.svg": "3e6e1ab6925d3db86ce9bd109c121db0",
"assets/assets/icons/Check%2520mark%2520rounde.svg": "e83caa6ca41e8af9229ae29d79f9410b",
"assets/assets/icons/Close.svg": "70478a15e0479750b0b03e000041e9f3",
"assets/assets/icons/Conversation.svg": "291fb6c6acdeb807afb452ae90f930db",
"assets/assets/icons/Discover.svg": "0981b6e74080b318d0bb4255681d2e05",
"assets/assets/icons/Error.svg": "0f876e9b9170982e37bbf767c6ebb47f",
"assets/assets/icons/facebook-2.svg": "48bf15d2057966765f384827997a2f41",
"assets/assets/icons/Flash%2520Icon.svg": "8b2bc2fd2894d143940eb565b4a827fe",
"assets/assets/icons/Game%2520Icon.svg": "f913dbd8d0e9e437cfb53d774eb980d9",
"assets/assets/icons/Gift%2520Icon.svg": "6feeb93f33263146741e38f4ebfbccbc",
"assets/assets/icons/google-icon.svg": "38e282dafbaaf9823263d49349670447",
"assets/assets/icons/Heart%2520Icon.svg": "a2be4f5f2079f5ff3dbd117eeaa9471e",
"assets/assets/icons/Heart%2520Icon_2.svg": "f728c6b3d75dfab6450f56a2a57633f0",
"assets/assets/icons/Location%2520point.svg": "146ea387710fa420046c0f71b89ad474",
"assets/assets/icons/Lock.svg": "44a5fb6d11a48fd52c87d95e34e7a689",
"assets/assets/icons/Log%2520out.svg": "ef8dc3d612e3e63ae4728a24d9982f13",
"assets/assets/icons/Mail.svg": "6b876f2539a1946b1a946e7a5646e909",
"assets/assets/icons/Parcel.svg": "45a2e4513281a1c511cff0d7d86439d1",
"assets/assets/icons/Phone.svg": "589731a88a098c9c6d40e32bc11c3d83",
"assets/assets/icons/Plus%2520Icon.svg": "23bd873f0fdef239500d68a150f9fa93",
"assets/assets/icons/Question%2520mark.svg": "7d0f74b3eb3cbeac772cb6a41476cfcf",
"assets/assets/icons/receipt.svg": "e0ecaf4c17597903fa1e8ab3c28fa963",
"assets/assets/icons/remove.svg": "77f17bcf86cb62db1b3ce224d6cb6fd3",
"assets/assets/icons/Search%2520Icon.svg": "5383aff67a0cc61bc20b953c73d87469",
"assets/assets/icons/Settings.svg": "d8fd4b8ed70a516c17d3d981d9a49999",
"assets/assets/icons/Shop%2520Icon.svg": "1eda40840728635d3279f313774d1675",
"assets/assets/icons/Star%2520Icon.svg": "1ef6ad3bbe15947a5b4d9bf153101fd3",
"assets/assets/icons/Success.svg": "b0a226cdd68878cf33bddc8d9d2cc1f6",
"assets/assets/icons/Trash.svg": "f877c275194b39ca5f21fe7202ca852a",
"assets/assets/icons/twitter.svg": "2186bb91925602b76e5a4384b2198c06",
"assets/assets/icons/User%2520Icon.svg": "950d2f1652bdb59675231707a9124535",
"assets/assets/icons/User.svg": "737d49c1953f8098f618d523b45e5657",
"assets/assets/images/BANNER%2520APPS-01.jpg": "ae0dafd74ec589ba254ec995d1b80253",
"assets/assets/images/BANNER%2520APPS-02.jpg": "39d00d7e7979ba9583f2dd76f383c235",
"assets/assets/images/BANNER%2520APPS-03.jpg": "14e4815028dad949885016a8b7a3bdef",
"assets/assets/images/BANNER%2520APPS-04.jpg": "bfc2461223f785821b0b78139ef7ea60",
"assets/assets/images/BANNER%2520APPS-05.jpg": "866e5bf802a8d22f52b1d8f5828bb502",
"assets/assets/images/BANNER%2520APPS-06.jpg": "20561568d9f59016e252a22228a8d406",
"assets/assets/images/banner_app.png": "4719a3f7e7826561fde9daee53ce1e04",
"assets/assets/images/banner_app1.png": "4cadb0b97a4f9eb0f0d6644ccfa886d3",
"assets/assets/images/BGA.jpg": "3fbca1cfab0aa59d2476eb644256d8a6",
"assets/assets/images/bgi.jpg": "57dd31f59317841af1a6047b282a2d90",
"assets/assets/images/BOXsArtboard%25201_31@0.75x.png": "9ffb768900bfeae45f74b2c63c17e663",
"assets/assets/images/brosure/biofertil_1.jpg": "8590b1ada964f35404cc55a10d97a7ef",
"assets/assets/images/brosure/biofertil_2.jpg": "abcdb0c756e8e55fb6be418a759dbc1f",
"assets/assets/images/brosure/CSNB.jpg": "e8412040bf9ed9316c21c4f405222673",
"assets/assets/images/brosure/KCL.png": "942699a0eeeb1cc480cd287018fb6cea",
"assets/assets/images/brosure/kebomas_1.jpg": "4a26f211960972208a589be06aaebb39",
"assets/assets/images/brosure/ningrat_1.jpg": "634f576947561893819ef8ed1b060179",
"assets/assets/images/brosure/niphos_1.jpg": "03167b4eb801edb667c8ab107a204ecc",
"assets/assets/images/brosure/niphos_2.jpg": "b8d9d55c46c38edd3496bc37a22d0b16",
"assets/assets/images/brosure/nitrat_1.jpg": "ab6712cb317376882b19c776f792619a",
"assets/assets/images/brosure/NPK16-16-16BiruB.jpg": "489892dd9f4b86019d49af29b1214848",
"assets/assets/images/brosure/NPKPadiB.jpg": "8aa99575a408e436be3f5ecabe1e6f29",
"assets/assets/images/brosure/oca_1.jpg": "02d2d57c437f861a003bde9ec24b106b",
"assets/assets/images/brosure/oca_2.jpg": "05cb71b4b01ac7cddfccfe461d478d29",
"assets/assets/images/brosure/petroganik_1.jpg": "c800e643d8270757b27251197ca7456a",
"assets/assets/images/brosure/petroganik_2.jpg": "68b4904fed57f80b0d8b1a50793491a1",
"assets/assets/images/brosure/phonskaplus_1.jpg": "819034f3ba1e4ec90f81450d852170b2",
"assets/assets/images/brosure/phonska_1.jpg": "f9bbcbd039c618fe1be8de485061623b",
"assets/assets/images/brosure/phonska_2.jpg": "f22390e4988f00975ca63362588370ec",
"assets/assets/images/brosure/PNPB.jpg": "d677806b6c1fea3c4cd023f9804f996e",
"assets/assets/images/brosure/rockphosphate_1.jpg": "7c08ea14d6151c4603dd94784aad6f55",
"assets/assets/images/brosure/sp36_1.jpg": "4fd895b1508c7d2f8db22442d05a44bc",
"assets/assets/images/brosure/urea_1.jpg": "349dc9a3867056cf9b440ac7f379a5ed",
"assets/assets/images/brosure/ZAPakTaniB.jpg": "f9b9ff417ae1117d3a0c07800d1e4bab",
"assets/assets/images/brosure/za_1.jpg": "da840296ea6321323f130a2989e564ea",
"assets/assets/images/brosure/zk_1.jpg": "3e4ea4b3b455477b0d69e34eaa8b75a1",
"assets/assets/images/greenhouse.png": "e326d31afdfff86bb2521e18ba07dd06",
"assets/assets/images/hama/belalang.png": "e73525235b93fd59e2c1f2a04f30797c",
"assets/assets/images/hama/bg.png": "0ede6b6b62d1db8f28cf9578e852ff57",
"assets/assets/images/hama/gulma.png": "b2f47bec5373cd117e820dee9237a4a8",
"assets/assets/images/hama/laba.png": "4a1abaa6965be2a34d8bd985fba71e71",
"assets/assets/images/hama/rat.png": "91ac8e7aabc81d2d247e8f84a5887601",
"assets/assets/images/hama/ulat.png": "95450de830c27783e8643c9c72bc1a07",
"assets/assets/images/hydroponic.png": "39fc0323684750af8884800a1eea4d27",
"assets/assets/images/KOLAM_IKAN.psd": "df600ac3c5827dee669f3b77635b48d1",
"assets/assets/images/komoditi/anggur.png": "8ea94723dab4b3d7bd3764ef95556d87",
"assets/assets/images/komoditi/apel.png": "62eed5bdda4422804c33dbba449b01f2",
"assets/assets/images/komoditi/bawang.png": "d1ada84220fabf9943e513543592d82b",
"assets/assets/images/komoditi/bawangputih.png": "8eef9e86e18bbcabf04a0dcccc4cb2d7",
"assets/assets/images/komoditi/blimbing.png": "50a46c223cf77ab719558b1a7edf5fdb",
"assets/assets/images/komoditi/brokoli.png": "8b0089f664274c88017a5f0cd6f86f7c",
"assets/assets/images/komoditi/buncis.png": "d208803346422d180dbffb2e0193854b",
"assets/assets/images/komoditi/cengkeh.png": "1eb6a0583a4385bb064bf5e588acd283",
"assets/assets/images/komoditi/jagung.png": "8cb38c41971af6d918254e75c229c82b",
"assets/assets/images/komoditi/jeruk.png": "d6233a0a7f2131ccbc2469b765415aa8",
"assets/assets/images/komoditi/kacangpanjang.png": "408451296c04ad35dc268fa3a4d95e77",
"assets/assets/images/komoditi/kakao.png": "b6f2192c204a09597b42ab962f1d4971",
"assets/assets/images/komoditi/kangkung.png": "2bbcc5f674d05c47ce566316f0b3ea85",
"assets/assets/images/komoditi/kedelai.png": "d208803346422d180dbffb2e0193854b",
"assets/assets/images/komoditi/kelapasawit.png": "cf1034aeb650c5e32c51ab0cdfa02319",
"assets/assets/images/komoditi/kentang.png": "021c01b5bf355edd2ab498db6a183b1d",
"assets/assets/images/komoditi/kopi.png": "f6aadb1c88d0d35f0cc10ee45405c4b8",
"assets/assets/images/komoditi/kubis.png": "753f6458a5b7bcadd4f893139f21bf9e",
"assets/assets/images/komoditi/kubisbunga.png": "941d0922091d64a8eaeb01218f2b0750",
"assets/assets/images/komoditi/lada.png": "7e793d0534547798881cc7186fa682ff",
"assets/assets/images/komoditi/lombok.png": "98dfb9c780cfc318eacb3736484c2824",
"assets/assets/images/komoditi/mangga.png": "311bf25c31952c2af829ca94a7c1ceba",
"assets/assets/images/komoditi/manggis.png": "fa43261181fcaa2a01c96ee0e9c5a9ba",
"assets/assets/images/komoditi/melon.png": "25cfcb2280cbf1056f182a608ecb29af",
"assets/assets/images/komoditi/mentimun.png": "8d1728ced4d1febdb8ee68fa20b8edd8",
"assets/assets/images/komoditi/nanas.png": "68a9a15ce1eb93d38cf681ba07c4774d",
"assets/assets/images/komoditi/padi.png": "7c487f2e6c171f7cdf860bbfa6756e87",
"assets/assets/images/komoditi/pisang.png": "2f22d15a0ebf64debff5eedf1854f819",
"assets/assets/images/komoditi/rawit.png": "76775f9010ef78aa25d1837addcba2f4",
"assets/assets/images/komoditi/rice.png": "9949944a30cc439ea6fd9816e1a4e727",
"assets/assets/images/komoditi/sawi.png": "b3947b85789416f7a91f543b025934f9",
"assets/assets/images/komoditi/selada.png": "b22c694bf9d9d83f1defb1e0289c52e9",
"assets/assets/images/komoditi/semangka.png": "8021dd750bac959b1db204dd2c43add0",
"assets/assets/images/komoditi/tebu.png": "24f8f8876f3a477051cfe9cbab8bc690",
"assets/assets/images/komoditi/tembakau.png": "41878f2e3595d1a3322017de88d149c9",
"assets/assets/images/komoditi/terong.png": "9fff1ed2f2d16cbbbe10f1099a025849",
"assets/assets/images/komoditi/tomat.png": "c0c3b7a1c1deab113078cee0c6e90635",
"assets/assets/images/komoditi/ubijalar.png": "796716e098d80339af16a85956d64ac3",
"assets/assets/images/komoditi/ubikayu.png": "ef1f79afc528be31a18c08b633c2b115",
"assets/assets/images/komoditi/wortel.png": "e22cf407813cc1024d70f9a431f22265",
"assets/assets/images/logo-saprotan.png": "672a74e2af1e12559379a5e112af679d",
"assets/assets/images/logo.png": "aa86bd9e19a54eb12108300f899ec7ff",
"assets/assets/images/logoPG-03.png": "5a825846062415bc31dfc726503b082c",
"assets/assets/images/logoPG.png": "4683e2948e555b3663b4513b00bc7f5b",
"assets/assets/images/logoRide.png": "82e680d669e0c3f00d80c57f0affbbf9",
"assets/assets/images/logos.png": "88d9adc24084bb30efd77278ebbc6833",
"assets/assets/images/logo_hitam.png": "c34ee53818d6aade67d7a48a4bb1ae59",
"assets/assets/images/logo_putih.png": "c1e6b967bd768d4035702a6981a68efb",
"assets/assets/images/logo_Splash.png": "7af3bdfc59cafe25f3dfbe2471837b91",
"assets/assets/images/maskot/char_blanja.png": "f88b27f0aeeea2e48d8f049386fe0743",
"assets/assets/images/maskot/char_hai.png": "af3776fd41b37ba0825df5de4a970661",
"assets/assets/images/maskot/char_itutu.png": "f3ba1bec00411e07b73e96650c8c9617",
"assets/assets/images/maskot/char_sapa_duduk.png": "d7957cc4dc0dde20245e46cb02a134f5",
"assets/assets/images/MenuRawatan/label_ayam.png": "ba847a99ccdf637266124ebbaab8f5b2",
"assets/assets/images/MenuRawatan/label_ikan.png": "351c6340cd1112d6438a1139d6d76096",
"assets/assets/images/MenuRawatan/label_magot.png": "8feca4705cd080c44b17c8b8f530ce77",
"assets/assets/images/MenuRawatan/label_pnel.png": "bdb1b197888931f93ae6326b1818b412",
"assets/assets/images/MenuRawatan/label_tanam.png": "e7fd6b15dd7b046a2af105b1c08378b4",
"assets/assets/images/MenuRawatan/logoRBack.png": "094385d05f91175e20abb930e454ba86",
"assets/assets/images/MenuRawatan/RawatMotor/Botol_MotorRawat_1.png": "f656f10efae5d0ebf988fac14bacd831",
"assets/assets/images/MenuRawatan/RawatMotor/Botol_MotorRawat_2.png": "f7cb63650409689413d6c726e91568ad",
"assets/assets/images/MenuRawatan/RawatMotor/Botol_MotorRawat_3.png": "96a2db7856bd2a87ef3638afb9f228a2",
"assets/assets/images/MenuRawatan/RawatMotor/Botol_MotorRawat_4.png": "dfe46f22a733067329a69768e53e7a11",
"assets/assets/images/MenuRawatan/RawatMotor/Botol_MotorRawat_5.png": "1668e886a5894c37dbb8e2d4dcf9177b",
"assets/assets/images/MenuRawatan/RawatMotor/car.png": "a8ccb8397ab0415cd5c39c5fd1cf2a4c",
"assets/assets/images/MenuRawatan/RawatMotor/Kuas.png": "09cedcb75f31c68d30e8d1d11aa64fc3",
"assets/assets/images/MenuRawatan/RawatMotor/microfiber.png": "5b1d713f7dedce04326505bf0a6ffe93",
"assets/assets/images/MenuRawatan/RawatMotor/motor.png": "ca5410aa87ae79e30c40b62595cfda16",
"assets/assets/images/MenuRawatan/RawatMotor/productmotor.png": "a7a9669646e6d8d2e941fb896aa294a6",
"assets/assets/images/MenuRawatan/RawatMotor/sarung%2520tangan%2520karet%2520spons.png": "a135e2c01fcb7d994784763dc81b3f7b",
"assets/assets/images/MenuRawatan/RawatMotor/Sarung%2520Tangan.png": "a8d23d5e0efa8e6e3283b4b493ae5298",
"assets/assets/images/MenuRawatan/RawatMotor/spons.png": "f0bd3b1195510a2057f52333d35bb0c6",
"assets/assets/images/MenuRawatan/RawatRumah/rumah.png": "1f80f8f79a8da9a55c5298630a96df78",
"assets/assets/images/MenuRawatan/RawatRumah/rumahpro.png": "414584bc5e380e5a1eda9d27aaa643d3",
"assets/assets/images/MenuRawatan/RawatRumah/usirkucing.png": "f1bcc938a2b2603c3f7e673660151e8a",
"assets/assets/images/MenuRawatan/RawatRumah/usirsemut.png": "e9dba0fedb965dc1a6ffb2cec26e58f6",
"assets/assets/images/MenuRawatan/RawatRumah/usirtikus.png": "0cac137ca22bbc7b7b5a51165d14b6f2",
"assets/assets/images/MenuRawatan/RawatTanam/635e054a3f9c1.jpg": "06f98055710aa3f8946f54cf56c738a3",
"assets/assets/images/MenuRawatan/RawatTanam/abmix.png": "e736592372f2e1013ff357165d1eb52f",
"assets/assets/images/MenuRawatan/RawatTanam/abmixKotak.png": "faf3196dac8d87798caae8471fed6906",
"assets/assets/images/MenuRawatan/RawatTanam/abmixPaketKotak.png": "bb8936a2d7496177c25983f3025e1f58",
"assets/assets/images/MenuRawatan/RawatTanam/ab_mix.jpg": "f78a40b711ceba8944273de833852160",
"assets/assets/images/MenuRawatan/RawatTanam/antirumput.png": "054218f9ef5150039402302cde117194",
"assets/assets/images/MenuRawatan/RawatTanam/antiulat.png": "35e98a11bfc839b9ddaa9e3e90d4c1a9",
"assets/assets/images/MenuRawatan/RawatTanam/ayam.jpg": "a995fcf1e1a3c946a8f6f30a6c3dc6e6",
"assets/assets/images/MenuRawatan/RawatTanam/ayam_Ascariasis.jpg": "5af392bda787299de4c29f93ae0e5da0",
"assets/assets/images/MenuRawatan/RawatTanam/ayam_Avian%2520Influenza.jpg": "101bb1df59f7bcc906c8cdc2c141d955",
"assets/assets/images/MenuRawatan/RawatTanam/ayam_Coryza.jpg": "e2545c0ca90ed6624196eb9ff384ee96",
"assets/assets/images/MenuRawatan/RawatTanam/ayam_CRD%2520(Chronic%2520Respiratory%2520Disease).jpg": "5f50f87015aa0db499b3ebc143169e1c",
"assets/assets/images/MenuRawatan/RawatTanam/ayam_Egg%2520Drop%2520Syndrome.jpg": "4c6d89175006171a48fd703b51ff9350",
"assets/assets/images/MenuRawatan/RawatTanam/ayam_Ektoparasit.jpg": "32b405da625b14e7d2ec35d081be7f72",
"assets/assets/images/MenuRawatan/RawatTanam/ayam_Fowl%2520Cholera.jpg": "e0089e39ce1d6df625a9d96a3b1c98af",
"assets/assets/images/MenuRawatan/RawatTanam/ayam_Gumboro.jpg": "15c13c49180b9880d56ed44568aac5e9",
"assets/assets/images/MenuRawatan/RawatTanam/ayam_Infectious%2520Bronchitis.jpg": "709d8a52b885c4bf8f3ad7a3971d5aac",
"assets/assets/images/MenuRawatan/RawatTanam/ayam_Koksidiosis.jpg": "6e498c06dcc9dd537a2aa01e3a094c66",
"assets/assets/images/MenuRawatan/RawatTanam/ayam_Leucocytozoonosis%2520(Malaria%2520Like).jpg": "8c4b35415f57433cf9a8bbdbf7544924",
"assets/assets/images/MenuRawatan/RawatTanam/ayam_Mareks%2520Disease.jpeg": "dc71ad2027b32deab4bf263235dae283",
"assets/assets/images/MenuRawatan/RawatTanam/ayam_Newcastle%2520Disease%2520(ND).jpg": "d67895ecfa081d62dea78e01996974b2",
"assets/assets/images/MenuRawatan/RawatTanam/backgrond%2520motor-02.jpg": "54d29422ff0c0339d1110e4d55f23cb7",
"assets/assets/images/MenuRawatan/RawatTanam/backgrond%2520motor-03.jpg": "12538f3321b1aa1040207547acac903d",
"assets/assets/images/MenuRawatan/RawatTanam/backgrond%2520motor-03q.jpg": "d3cc38bab1ba70da52997a9d51aff3f7",
"assets/assets/images/MenuRawatan/RawatTanam/backgrond%2520motor-04.jpg": "e6c2715a7b503eb698ea3549c6979d42",
"assets/assets/images/MenuRawatan/RawatTanam/backgrond%2520motor-05.jpg": "3e9cb8ba433220a3a1ef8687d6d34802",
"assets/assets/images/MenuRawatan/RawatTanam/backgrond%2520motor-06.jpg": "9a6769677fdf0c004e9f0af36cade6cb",
"assets/assets/images/MenuRawatan/RawatTanam/bak_hidroponik.jpg": "e2b39a98e39f133dcb3307dfe8e9c41e",
"assets/assets/images/MenuRawatan/RawatTanam/baterai.jpg": "29161ba4ecf5feadf451b36a6a9a1130",
"assets/assets/images/MenuRawatan/RawatTanam/box.jpg": "bb110376d5cf74f075208ec70a41065b",
"assets/assets/images/MenuRawatan/RawatTanam/diagnosis.png": "9ec855496bcc4cf33b40307e6fdf8bdc",
"assets/assets/images/MenuRawatan/RawatTanam/garamRosok.png": "e5673dfcd55b91460f392f253a0ff596",
"assets/assets/images/MenuRawatan/RawatTanam/garamRosokKotak.png": "af4c9560d03e148866a0bafb827eaf72",
"assets/assets/images/MenuRawatan/RawatTanam/IMG_2393-removebg-preview.png": "58a94154a2d8ce54ff75d11f10307b71",
"assets/assets/images/MenuRawatan/RawatTanam/inverter.jpg": "ea8fede66c49a97a145595e0c128653f",
"assets/assets/images/MenuRawatan/RawatTanam/kabel.jpg": "5a79ac620deb0e2ab0e83b9adc7998db",
"assets/assets/images/MenuRawatan/RawatTanam/kandang.jpg": "2f5da1685db73f2746d34b7767fc1ce5",
"assets/assets/images/MenuRawatan/RawatTanam/Kandangayam.jpg": "d3d838e131aae0bc19266347faa8c7e3",
"assets/assets/images/MenuRawatan/RawatTanam/kandangAzolla.png": "9d8a5ef5c04db11ea5e396fa1ea9ffc9",
"assets/assets/images/MenuRawatan/RawatTanam/kandangHidroponik.png": "7c49c97d874fe6d7e6ecceca3f47ef06",
"assets/assets/images/MenuRawatan/RawatTanam/kandangHidroponik1.png": "7eb2aa96e18cf322c66778a49ffbeaca",
"assets/assets/images/MenuRawatan/RawatTanam/kolam.jpg": "5f7e0b40d57af83d1462797071294850",
"assets/assets/images/MenuRawatan/RawatTanam/kolam_ayam.png": "c3e935761a75d6c51a6dd13ce6db9a1d",
"assets/assets/images/MenuRawatan/RawatTanam/kolam_ayampro.png": "a9fda73ebfb8c181db002e04cb596b0d",
"assets/assets/images/MenuRawatan/RawatTanam/kolam_maggot.png": "9a11ad736b4187ff4604c419ae224daf",
"assets/assets/images/MenuRawatan/RawatTanam/kolam_maggotpro.png": "ce0f9a525480c139972a464c426492f7",
"assets/assets/images/MenuRawatan/RawatTanam/kolam_tanaman.png": "bad592c13b345ead536e7a0e9b25be50",
"assets/assets/images/MenuRawatan/RawatTanam/kolam_tanamanpro.png": "37582bdc3f0ac1847647be653597c319",
"assets/assets/images/MenuRawatan/RawatTanam/Lele_Aeromonas.jpg": "5e78622ce972fe3350535c60ed4fb4bd",
"assets/assets/images/MenuRawatan/RawatTanam/Lele_CCVD.jpg": "04a9c7d1555ea937ee572544a17d8bcc",
"assets/assets/images/MenuRawatan/RawatTanam/Lele_Columnaris.jpg": "4fe5ca4a2103db4080b99284aec030ba",
"assets/assets/images/MenuRawatan/RawatTanam/Lele_ESC.jpg": "4872b09e23dad9ec9cfd0cfad6cb364b",
"assets/assets/images/MenuRawatan/RawatTanam/Lele_WhiteSpotDisease.jpg": "613ad8e1cb7dce50f79fdaf2256e1a62",
"assets/assets/images/MenuRawatan/RawatTanam/MenaikanpH.png": "89b6abe66ff1fd7f840e8e8d2813dcf5",
"assets/assets/images/MenuRawatan/RawatTanam/MenurunkanpH.png": "58c6dca596ee66d010b6e7955fda77b3",
"assets/assets/images/MenuRawatan/RawatTanam/nam.png": "dbb3f156a5d3e1859d97a9c949714e80",
"assets/assets/images/MenuRawatan/RawatTanam/Nila_Columnaris.jpg": "db5b7325df545fce1ef604b91dbb1142",
"assets/assets/images/MenuRawatan/RawatTanam/Nila_saprolegnia.jpg": "6661321b03b9a41219ea04780ccd1b0d",
"assets/assets/images/MenuRawatan/RawatTanam/Nila_Streptococcosis.jpg": "4783d5c1f38a1942e6de891df911741f",
"assets/assets/images/MenuRawatan/RawatTanam/Nila_TiLV.jpg": "d777988545ad0c4b0b7c976ab7a6e24d",
"assets/assets/images/MenuRawatan/RawatTanam/Nila_Trichodiniasis.jpg": "2cbd18ce2c04bf8d9c7ada518c340632",
"assets/assets/images/MenuRawatan/RawatTanam/pakan%2520ikan.jpg": "6a4f1eba0a675aee5e37f2ccbffe11b7",
"assets/assets/images/MenuRawatan/RawatTanam/pakan.jpg": "423731cf370ea7ec5e4272506714762c",
"assets/assets/images/MenuRawatan/RawatTanam/Ph.png": "cf6af620af46c13a8e9ad48803a72bde",
"assets/assets/images/MenuRawatan/RawatTanam/PhKotak.png": "45856dc6ab71fb3cb8165ddc6065b401",
"assets/assets/images/MenuRawatan/RawatTanam/pipa.jpg": "50df491d324b5a8c5fd4a1ea34ce1a7d",
"assets/assets/images/MenuRawatan/RawatTanam/poc.png": "5525e2c0475195d5a73af20368680d5e",
"assets/assets/images/MenuRawatan/RawatTanam/pot.png": "b4498bbb2887726aa39d13b8dd79099b",
"assets/assets/images/MenuRawatan/RawatTanam/rangkaian.jpg": "1882c1d153c1619323c71803a4bcb6d9",
"assets/assets/images/MenuRawatan/RawatTanam/scc_PanelSolar.jpg": "2d520428ba94ba1244cbca7348dfccb7",
"assets/assets/images/MenuRawatan/RawatTanam/Socket%2520Cable%2520Connector%2520Solar%2520Panel%2520MC4%2520Caltech%2520(%25201%2520Male%2520-1%2520female%2520).jpg": "fff73a2aeebf9361bc0af1916d036528",
"assets/assets/images/MenuRawatan/RawatTanam/solar%2520Panel-10.jpg": "17d65981f06ac1703ad15b1acc75f77d",
"assets/assets/images/MenuRawatan/RawatTanam/tanaman.jpg": "8893ae8c7f0243ee6f5bcf3142868622",
"assets/assets/images/MenuRawatan/RawatTanam/tanaman.png": "0ee938ecc1b2c61b8c61746195c07fe5",
"assets/assets/images/MenuRawatan/RawatTanam/tanamanpro.png": "d37aa51eb93231def688a41e437f3454",
"assets/assets/images/MenuRawatan/RawatTanam/tikus.png": "cd926f80567123cc242651856d8b4f79",
"assets/assets/images/MenuRawatan/RawatTanam/tikusKotak.png": "6734ef4bbcc2bb82c9ec32c71cca9c8d",
"assets/assets/images/MenuRawatan/RawatTanam/tower.jpg": "1b7540390ad9a440b795ffe26b39323b",
"assets/assets/images/MenuRawatan/RawatTanam/zpt.png": "cd0da056b8d591600ae68f1f74ff6a34",
"assets/assets/images/MenuRawatan/Rawat_Ayam.png": "d7348e31b70881d1d507d5e8a50c5186",
"assets/assets/images/MenuRawatan/Rawat_Diri.png": "7cdb2d23c04af29295665f77ee17942a",
"assets/assets/images/MenuRawatan/Rawat_Hewan.png": "d598221c6998375955f53ba2fe077729",
"assets/assets/images/MenuRawatan/Rawat_Ikan.png": "4cb1460e483c9ada5e6f29dc9894bddb",
"assets/assets/images/MenuRawatan/Rawat_Maggot.png": "e7012a04ce9452863d5e8665f2d5fbee",
"assets/assets/images/MenuRawatan/Rawat_Motor.png": "ce2f3bb819e93e21d24da99652973183",
"assets/assets/images/MenuRawatan/Rawat_Rumah.png": "f10fd4d2f404df18ab5e908d2081e60e",
"assets/assets/images/MenuRawatan/Rawat_Rumah1.png": "c5a7a39d7d737610d74aeb648c4873ee",
"assets/assets/images/MenuRawatan/Rawat_Tanam.png": "031fe622bfc9faa78d18dcd858b88d6f",
"assets/assets/images/MenuRawatan/Rawat_Tanam1.png": "05873d024aa433635ffa88337dd500c4",
"assets/assets/images/meroke-tetap-jaya-logo.png": "2b34d372a1e8eef4a2805a92a296a2a0",
"assets/assets/images/object_tanaman.png": "b252a5dec0b366ee7d04dbff2ef72d9d",
"assets/assets/images/object_tanaman2.png": "1ef8d27c55d6985f0397981639ae3cc4",
"assets/assets/images/person.png": "0b09de591bf8eec831514648904557b4",
"assets/assets/images/pest-01.png": "3ef2da28d3a18bb3fe902467bf183302",
"assets/assets/images/Petrokimia_logo.png": "9bb6b0bac62ff860fc1ad164640a4392",
"assets/assets/images/pot/balok.png": "bee133226ce75d21d60f71105b99a01c",
"assets/assets/images/pot/kerucutTerpotong.png": "5f60ac88c91874ac6e1000671ea7f3f8",
"assets/assets/images/pot/kolam_balok.png": "5328beca6831a46f6d7aed07a57793ef",
"assets/assets/images/pot/kolam_kerucutTerpotong.png": "9b45484709acef19009cbc89211189c5",
"assets/assets/images/pot/kolam_setengahBola.png": "2566d37f8e8104eb1928a1d50baf123c",
"assets/assets/images/pot/kolam_tabung.png": "9c208bc0351d0fc1fb4c69e113f0b4bc",
"assets/assets/images/pot/kolam_zonabola.png": "fa792a5c6877b2721447e4f412673b84",
"assets/assets/images/pot/setengahBola.png": "f01b17529d1d3ceb46a4e9eda8b8ff29",
"assets/assets/images/pot/tabung.png": "04ca8c50647b5a8bc259efddf2769530",
"assets/assets/images/pot/zonabola.png": "bce9c320e30311a3e7c6d8db92e8bb9d",
"assets/assets/images/product/20220307230010.pdf": "664fb167ba32563718ca77d898eaa203",
"assets/assets/images/product/Biofeed.png": "3e5d127f0bca8e2b8355774916f1a03d",
"assets/assets/images/product/Biofertille.png": "127e0b5b93eca01ea9868bf40427c225",
"assets/assets/images/product/cas.png": "847d884e3066c29c7b62d8a1cd0de82c",
"assets/assets/images/product/CNG.png": "e7d588ae72794c0eceb4546b1ccc0063",
"assets/assets/images/product/CPN.png": "bf00a1fd5177fdac1af04da07a04d93e",
"assets/assets/images/product/CSN.png": "f4d6d4ee1d2239e3c60e0c7ce599a044",
"assets/assets/images/product/Fertibio.png": "44eae3dbebab0b1b064118e996974ccb",
"assets/assets/images/product/Fertiphos.png": "627a7d45cb553fab0d06251067ef8e81",
"assets/assets/images/product/Gladiator.png": "3c25c8c08cde68100543a27ed10d016d",
"assets/assets/images/product/Kamas.png": "8a45fb2f03edde48529e3742e1899d1e",
"assets/assets/images/product/Kapur.png": "c219571da03ec0dea2e894363a0a1733",
"assets/assets/images/product/KCL.png": "771c0381fe80f6da26d8aa3dedfebb5e",
"assets/assets/images/product/KCLPutih.png": "6e8319aaccd1eae310e3b06948673141",
"assets/assets/images/product/MKP.png": "5abe8221d39f99574003879f216a8558",
"assets/assets/images/product/musi.png": "e6e13d3b39f9bd5f641b78cb517096f0",
"assets/assets/images/product/m_FITOFLEX.png": "c2608cc25e606b48b2b8cd45699942a4",
"assets/assets/images/product/m_KARATEPLUS.png": "dd172da66b39cdfbce99a68ffa808e8a",
"assets/assets/images/product/m_KKB.png": "344a5d7fb23dbdcd9befda0cbdf112f5",
"assets/assets/images/product/m_MOP.png": "c13dd6b1d2693fd57c02330fe8c256cf",
"assets/assets/images/product/m_NPK.png": "61bab2a7168e9a542992622a1f9769a3",
"assets/assets/images/product/m_NPKcpn.png": "e1e56c7422f7e4056f8bf83b6e7724ee",
"assets/assets/images/product/m_NPKgrow.png": "666df5b2069292d18a0ecad77b35abaf",
"assets/assets/images/product/m_NPKpro.png": "bb7a279c2c701ea02b2eb542fcb7cc31",
"assets/assets/images/product/m_PROVITHIJAU.png": "1c098fdc20baa51ad334f34ccdc619e5",
"assets/assets/images/product/m_PROVITMERAH.png": "e29f1cf9b33957d672fe573c0d019d2c",
"assets/assets/images/product/m_PROVITORANGE.png": "5b7eee70119acf375b05f8eef7ffd89c",
"assets/assets/images/product/m_ROCK.png": "4a73cb68f4d551d63d40c93fe1f90918",
"assets/assets/images/product/m_SOP.png": "94602d4203ff1d358eab5476d3cfa13c",
"assets/assets/images/product/m_SPRINTER.png": "b9863f272c3f8c8cbedfd01fda94f6de",
"assets/assets/images/product/m_SS.png": "e4dcbe0e71697ee01cb5eb69b64b27a8",
"assets/assets/images/product/m_SUBURKALI.png": "e6392daa94eeeb6643ef63d520516bd8",
"assets/assets/images/product/m_TSP.png": "336896acfab6f3d36f875449d7171e09",
"assets/assets/images/product/m_ZA.png": "b9950a6d9c2c59cb066add35adde83a0",
"assets/assets/images/product/NeoKristalonBoron.png": "4c0d7cd56e5e51c850a7ca7c7f141efc",
"assets/assets/images/product/NeoKristalonH.png": "9b4bf1b5db6828bcbe2f4bfdd140ec48",
"assets/assets/images/product/ningrat.png": "4f5972a2348b819976cc95a50f2e6d34",
"assets/assets/images/product/nitrat.png": "2c94150975c7b37fa62fe2da911da8cb",
"assets/assets/images/product/npk-kebomas.png": "8ec36e3aac90c3465118e9960d18cdd9",
"assets/assets/images/product/NPK16-16-16Biru.png": "9fa3d8606d555d4260ca70c2ffbf4be5",
"assets/assets/images/product/NPKPadi.png": "420ab116194a84a306620a8f59e9d82a",
"assets/assets/images/product/NPS.png": "7636bf5a17c032fc265179ec921d6ca0",
"assets/assets/images/product/oca.png": "4c268fdc78e01635d2ba9e9fc8925985",
"assets/assets/images/product/pakan_ayam.png": "45cfa09728202a990cf9c88a48ecd789",
"assets/assets/images/product/pelet.png": "c96e060ef8a4e11e68301f18f4c3eb59",
"assets/assets/images/product/petroChICK.png": "5af75d73f6d162a76fb074890aa97406",
"assets/assets/images/product/PetroFish.png": "fe5f1d4aed493a211610bbcfe928b439",
"assets/assets/images/product/PETROGANIK.png": "54b9c39579b716e0d3436888703da489",
"assets/assets/images/product/pg_petroponic.png": "2680fba28c54a42d82c604f1c8bcd4ae",
"assets/assets/images/product/phonska-plus.png": "0dc2fa31ab9cbeca970d940dd3fc8174",
"assets/assets/images/product/PHONSKA.png": "0fdd2f0ed17b7f47f5a9c0a103698297",
"assets/assets/images/product/Phosphate.png": "1190a35ecb9124ec91a021b94fb1753b",
"assets/assets/images/product/PNP.png": "d1f5e2f7f855da01b9ce62a4f623c879",
"assets/assets/images/product/Poston250SC.png": "b8dcc7ce4e4e44a4497e22fb2734220e",
"assets/assets/images/product/product_petro.png": "93d96ebc4d42837eb19ad3578a921b8b",
"assets/assets/images/product/PupukKandang.png": "efedf43222420aec37c7dbb487cc05f4",
"assets/assets/images/product/rawat/abmix.png": "947c8f4b824974b998e891fb01b0410a",
"assets/assets/images/product/rawat/bag%2520pasir%2520kucing.png": "1379e32d6e7bff727e6e509f133b3b3d",
"assets/assets/images/product/rawat/bibitSawi.png": "8ae537c6007129e91f0498108b852435",
"assets/assets/images/product/rawat/bibitSelada.png": "4305ef455ed374812dc29517bed46eaf",
"assets/assets/images/product/rawat/EM4.png": "c8572e8d1e524bf43e19911c9cf7a184",
"assets/assets/images/product/rawat/garam.png": "e7196f05eec989634a709d1232fe3325",
"assets/assets/images/product/rawat/kandang%2520nsf.png": "135e7d850a87a41fb5adec776c62f234",
"assets/assets/images/product/rawat/perangakapTikus.png": "504139a74a0524f9a00e53de5acb224d",
"assets/assets/images/product/rawat/pH.png": "f3a5b2075f08b50290585a7429b1e164",
"assets/assets/images/product/rawat/repackPakan.png": "2178767b4e7813a6c1df6abe1c985cfe",
"assets/assets/images/product/rawat/tds.png": "7753c9fbea0fb9a3ab464da7509dc99a",
"assets/assets/images/product/rawat/tikus.png": "9ac44d9e5d5fbff80c4edebc5507656d",
"assets/assets/images/product/Saprodap.png": "5fba0f884e15548dc7b0463ca18d12b2",
"assets/assets/images/product/sidat.png": "a6bb8d914cb9a6928c546a033fbbcb7c",
"assets/assets/images/product/sidat_insektisida.png": "a88323cd3142a1ede017730a72e591f6",
"assets/assets/images/product/SP-36.png": "793f02d4928cc46b6b8ecb6b1210e3c8",
"assets/assets/images/product/subnonsub_sp36.png": "63a9cc4bd281ed5a5ed603afecb4811e",
"assets/assets/images/product/subnonsub_urea.png": "1544390d9cbbd82be99e1073c47e303c",
"assets/assets/images/product/subnonsub_za.png": "c0ef34566c120eca16e7f68889deedec",
"assets/assets/images/product/Ultradap.png": "30ee5688567031185512514047e25aea",
"assets/assets/images/product/UREA.png": "034580dadd613d2bb75298aefb12e260",
"assets/assets/images/product/Urecote.png": "561f1c43b88f048a1c24d1884e6ace1d",
"assets/assets/images/product/ZA.png": "fe2cfe9671f5074c3c16d24cfc9cbce7",
"assets/assets/images/product/ZAPakTani.png": "2efb26cc6d6eee4902c1ad9c4987bbb2",
"assets/assets/images/product/ZK.png": "4a86347edca61e52b2004851b490213e",
"assets/assets/images/Produk2_1.png": "234ef04db89027ab9f9273dd48893f38",
"assets/assets/images/produk3_2.png": "130d39d0b5af737fd24d6169bbdb2354",
"assets/assets/images/produk3_3.png": "19018d4eacfe191b005a2b441a858102",
"assets/assets/images/TDS%2520pH.png": "f3d7213a80d7306e6e7a7c2950350bea",
"assets/assets/images/Untitled-1.png": "947c8f4b824974b998e891fb01b0410a",
"assets/FontManifest.json": "718c6caf293dc8ad4b42f33043e39ea8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "2da56a36c7722da05968e69c6d782996",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "36f22e673972e32d8974db1925948993",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "009ba6d2740a6f9b1a00a1fbc94df2a6",
"/": "009ba6d2740a6f9b1a00a1fbc94df2a6",
"main.dart.js": "0a8d9a5ed4c9f3570d4d7c2839ee26c3",
"manifest.json": "864a2791915f4400c39794f0559796df",
"splash/img/dark-1x.png": "1cbe880925f35c0da3162a1f3a4aca46",
"splash/img/dark-2x.png": "e3377e4b01a1774c722f3ae1c7cd7fe1",
"splash/img/dark-3x.png": "c27d4628cb5d1ddec0cb5cb862ff467e",
"splash/img/dark-4x.png": "ef846ac45dcd308e3833aa140574c7aa",
"splash/img/light-1x.png": "1cbe880925f35c0da3162a1f3a4aca46",
"splash/img/light-2x.png": "e3377e4b01a1774c722f3ae1c7cd7fe1",
"splash/img/light-3x.png": "c27d4628cb5d1ddec0cb5cb862ff467e",
"splash/img/light-4x.png": "ef846ac45dcd308e3833aa140574c7aa",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "04511f3379dc0b2ae7fad288fdfadc36",
"version.json": "e072a00c6ee50c5c5ab7d5cf8657a2f2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
