import React from 'react'

interface IProvince {
    id:string,
    name:string
}
interface ICity {
    id:string,
    province_id:string,
    name:string
}

interface IRegency {
    id:string,
    district_id:string,
    name:string
}
export const useGetCountry = () => {
    const [province, setProvince] = React.useState<IProvince[]>([])
    const [city, setCity] = React.useState<ICity[]>([])
    const [regency, setRegency] = React.useState<IRegency[]>([])

    const getProvince = async () => {
        try {
            const response = await fetch('http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
            const data = await response.json()
            setProvince(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getCity = async (provinceId:string) => {
        try {
            const response = await fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`)
            const data = await response.json()
            setCity(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getRegency = async (cityId:string) => {
        try {
            const response = await fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/districts/${cityId}.json`)
            const data = await response.json()
            setRegency(data)
        } catch (error) {
            console.log(error)
        }
    }

  return {
    province,
    city,
    regency,
    getProvince,
    getCity,
    getRegency
  }
}
