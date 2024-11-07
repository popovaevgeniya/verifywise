import { Request, Response } from "express";
const MOCK_DATA_ON = process.env.MOCK_DATA_ON;

import { STATUS_CODE } from "../utils/statusCode.utils";
import {
  createMockProject,
  deleteMockProjectById,
  getAllMockProjects,
  getMockProjectById,
  updateMockProjectById
} from "../mocks/tools/project.mock.db"
import {
  createNewProjectQuery,
  deleteProjectByIdQuery,
  getAllProjectsQuery,
  getProjectByIdQuery,
  updateProjectByIdQuery
} from "../utils/project.utils";

export async function getAllProjects(req: Request, res: Response): Promise<any> {
  try {
    if (MOCK_DATA_ON === "true") {
      const projects = getAllMockProjects();

      if (projects) {
        return res.status(200).json(STATUS_CODE[200](projects));
      }

      return res.status(204).json(STATUS_CODE[204](projects));
    } else {
      const projects = await getAllProjectsQuery();

      if (projects) {
        return res.status(200).json(STATUS_CODE[200](projects));
      }

      return res.status(204).json(STATUS_CODE[204](projects));
    }
  } catch (error) {
    return res.status(500).json(STATUS_CODE[500]((error as Error).message));
  }
}

export async function getProjectById(req: Request, res: Response): Promise<any> {
  try {
    const projectId = parseInt(req.params.id);

    if (MOCK_DATA_ON === "true") {
      const project = getMockProjectById(projectId);

      if (project) {
        return res.status(200).json(STATUS_CODE[200](project));
      }

      return res.status(404).json(STATUS_CODE[404](project));
    } else {
      const project = await getProjectByIdQuery(projectId);

      if (project) {
        return res.status(200).json(STATUS_CODE[200](project));
      }

      return res.status(404).json(STATUS_CODE[404](project));
    }
  } catch (error) {
    return res.status(500).json(STATUS_CODE[500]((error as Error).message));
  }
}

export async function createProject(req: Request, res: Response): Promise<any> {
  try {
    const {
      name,
      description,
      last_updated,
      owner_id,
      compliance_status,
      controls_completed,
      requirements_completed
    } = req.body;

    if (
      !name ||
      !description ||
      !last_updated ||
      !owner_id ||
      !compliance_status ||
      controls_completed === undefined ||
      requirements_completed === undefined
    ) {
      return res
        .status(400)
        .json(
          STATUS_CODE[400]({ message: "name, description, last_updated, owner_id, compliance_status, controls_completed and requirements_completed are required" })
        );
    }

    if (MOCK_DATA_ON === "true") {
      const newProject = createMockProject({
        name,
        description,
        last_updated,
        owner_id,
        compliance_status,
        controls_completed,
        requirements_completed
      });

      if (newProject) {
        return res.status(201).json(STATUS_CODE[201](newProject));
      }

      return res.status(503).json(STATUS_CODE[503]({}));
    } else {
      const newProject = await createNewProjectQuery({
        name,
        description,
        last_updated,
        owner_id,
        compliance_status,
        controls_completed,
        requirements_completed
      });

      if (newProject) {
        return res.status(201).json(STATUS_CODE[201](newProject));
      }

      return res.status(503).json(STATUS_CODE[503]({}));
    }
  } catch (error) {
    return res.status(500).json(STATUS_CODE[500]((error as Error).message));
  }
}

export async function updateProjectById(
  req: Request,
  res: Response
): Promise<any> {
  console.log("updateProjectById");
  try {
    const projectId = parseInt(req.params.id);
    const {
      name,
      description,
      last_updated,
      owner_id,
      compliance_status,
      controls_completed,
      requirements_completed
    } = req.body;

    if (
      !name ||
      !description ||
      !last_updated ||
      !owner_id ||
      !compliance_status ||
      controls_completed === undefined ||
      requirements_completed === undefined
    ) {
      return res
        .status(400)
        .json(
          STATUS_CODE[400]({ message: "name, description, last_updated, owner_id, compliance_status, controls_completed and requirements_completed are required" })
        );
    }

    if (MOCK_DATA_ON === "true") {
      const updatedProject = updateMockProjectById(projectId, {
        name,
        description,
        last_updated,
        owner_id,
        compliance_status,
        controls_completed,
        requirements_completed
      });

      if (updatedProject) {
        return res.status(202).json(STATUS_CODE[202](updatedProject));
      }

      return res.status(404).json(STATUS_CODE[404]({}));
    } else {
      const updatedProject = await updateProjectByIdQuery(projectId, {
        name,
        description,
        last_updated,
        owner_id,
        compliance_status,
        controls_completed,
        requirements_completed
      });

      if (updatedProject) {
        return res.status(202).json(STATUS_CODE[202](updatedProject));
      }

      return res.status(404).json(STATUS_CODE[404]({}));
    }
  } catch (error) {
    return res.status(500).json(STATUS_CODE[500]((error as Error).message));
  }
}

export async function deleteProjectById(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const projectId = parseInt(req.params.id);

    if (MOCK_DATA_ON === "true") {
      const deletedProject = deleteMockProjectById(projectId);

      if (deletedProject) {
        return res.status(202).json(STATUS_CODE[202](deletedProject));
      }

      return res.status(404).json(STATUS_CODE[404]({}));
    } else {
      const deletedProject = await deleteProjectByIdQuery(projectId);

      if (deletedProject) {
        return res.status(202).json(STATUS_CODE[202](deletedProject));
      }

      return res.status(404).json(STATUS_CODE[404]({}));
    }
  } catch (error) {
    return res.status(500).json(STATUS_CODE[500]((error as Error).message));
  }
}
