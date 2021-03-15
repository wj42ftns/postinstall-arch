# postinstall-arch

Pet project for preparing system after clear anarchy installation: https://www.youtube.com/watch?v=WdNce2f-Odg&list=PL4h3VWjc7zFeEcCNtgrO2copCr40gd2yW&index=2

## build binary file

```shell
git clone https://github.com/wj42ftns/postinstall-arch.git
cd postinstall-arch
npm install
npm run build  # it will work if you use nodeJs: "14.12.0"
```

look for binary script in postinstallArch.exe

## usage

casual (xcfe and without some programs for work)

```shell
wget https://github.com/wj42ftns/postinstall-arch/raw/main/dist/postinstallArch.exe postinstallArch.exe
chmod 700 ./postinstallArch.exe
./postinstallArch.exe
rm postinstallArch.exe
```

or main

```shell
wget https://github.com/wj42ftns/postinstall-arch/raw/main/dist/postinstallArch.exe postinstallArch.exe
chmod 700 ./postinstallArch.exe
./postinstallArch.exe --main
rm postinstallArch.exe
```
