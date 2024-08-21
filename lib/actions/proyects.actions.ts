import { ActionResponse } from "../constants";
import { Proyect } from "../models/proyect.model";

interface GetProyectsResponse extends ActionResponse {
  data: Proyect[] | null
}

export async function getProyects(): Promise<GetProyectsResponse>{
  try {
    const proyectsName = process.env.PROYECTS?.split(' ');
    const proyectsSubdomain = process.env.PROYECTS_URL?.split(' ');
    const proyectsDesc = process.env.PROYECTS_DESC?.split('~');

    if (!proyectsName || !proyectsSubdomain || !proyectsDesc) {
      throw 'Missing some of Proyects env variables'
    }

    const proyectsList:Proyect[] = []

    for (let index = 0; index < proyectsName.length; index++) {
      const proyect:Proyect = {
        name: proyectsName[index],
        description: proyectsDesc[index],
        subdomain: proyectsSubdomain[index]
      }

      if(!proyect.name || !proyect.description || !proyect.subdomain) throw 'Missing props for proyect'

      proyectsList.push(proyect)
    }

    return {
      data: proyectsList,
      error: null,
    }
  } catch (error) {
    console.error(error);
    if (typeof error === 'string') {
      return {
        error: error,
        data: null
      }
    }
    return {
      error: 'Error in getProyects action, Please check console for more detail',
      data: null
    }
  }
}