# DATA KEUANGAN API DOCUMENTATION

## Input Data

**Method:** `POST`  
**Endpoint:** `/api/data/{id_profile}/input`

### Request:

```json
Headers: Authorization Bearer Token
```

```json
{
  "labaKotor": "angka_rupiah",
  "bayarGaji": "angka_rupiah",
  "bayarAir": "angka_rupiah",
  "biayaListrik": "angka_rupiah",
  "biayaTransport": "angka_rupiah",
  "biayaPromosi": "angka_rupiah",
  "biayaPackaging": "angka_rupiah",
  "biayaPajak": "angka_rupiah"
}
```

### Response:

```json
{
  "dateAdded": "DD-MM-YYYY",
  "message": "Data berhasil ditambahkan"
}
```

## History

**Method:** `GET`  
**Endpoint:** `api/data/<id_profile>/history/<dateTime>`

### Request:

```json
Headers: Authorization Bearer Token
```


### Response:

```json
{
  "data": {
    "id_profile": 1,
    "id_data": 1,
    "message": "Hasil Analisis",
    "dateTime": "DD-MM-YYYY"
  }
}
```

## History Details

**Method:** `GET`  
**Endpoint:** `/api/data/history/{id_profile}/{id_data}/details`

### Request:

```json
Headers: Authorization Bearer Token
```

### Response:

```json
{
  "data": {
    "id_profile": 1,
    "id_data": 1,
    "message": "Hasil Analisis",
    "dateTime": "DD-MM-YYYY",
    "labaKotor": "angka_rupiah",
    "bayarGaji": "angka_rupiah",
    "bayarAir": "angka_rupiah",
    "biayaListrik": "angka_rupiah",
    "biayaTransport": "angka_rupiah",
    "biayaPromosi": "angka_rupiah",
    "biayaPackaging": "angka_rupiah",
    "biayaPajak": "angka_rupiah"
  }
}
```
