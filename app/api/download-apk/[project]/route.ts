import { NextResponse } from "next/server";
import { R2_BASE } from "../../../../lib/constants";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ project: string }> },
) {
  const { project } = await params;

  if (!project) {
    return new NextResponse("Project name is required", { status: 400 });
  }

  const apkUrl = `${R2_BASE}/projects/${project}/apk/${project}.apk`;

  try {
    const response = await fetch(apkUrl);

    if (!response.ok) {
      return new NextResponse("APK not found", { status: 404 });
    }

    return new NextResponse(response.body, {
      headers: {
        "Content-Type": "application/vnd.android.package-archive",
        "Content-Disposition": `attachment; filename="${project}.apk"`,
      },
    });
  } catch {
    return new NextResponse("Failed to fetch APK", { status: 502 });
  }
}
